import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `404 | ${location.pathname}`;
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#130627] via-[#1b0935] to-[#2a0d56]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-12 -right-16 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <main className="mx-4 w-full max-w-lg rounded-2xl bg-white/10 p-8 text-center shadow-xl backdrop-blur-md ring-1 ring-white/10">
        <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400">
          404
        </h1>
        <p className="mt-3 text-lg text-slate-200">
          Sorry, we couldn't find that page.
        </p>
        <p className="mt-2 text-sm text-slate-300">
          Path:
          <code className="ml-2 rounded border border-white/10 bg-white/5 px-2 py-1 text-slate-100">
            {location.pathname}
          </code>
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-fuchsia-500 px-4 py-2 text-white shadow hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          >
            Go Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
