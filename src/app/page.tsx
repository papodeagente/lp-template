export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-2xl text-center space-y-6">
        <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest rounded-full border border-white/20 text-white/70">
          LP Template
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Sua próxima landing page começa aqui.
        </h1>
        <p className="text-lg text-white/70">
          Edite <code className="px-1.5 py-0.5 rounded bg-white/10">src/app/page.tsx</code>{" "}
          para começar. Forke este repo para criar uma nova LP.
        </p>
        <div className="flex gap-3 justify-center pt-4">
          <a
            href="#cta"
            className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition font-medium"
          >
            Call to action
          </a>
          <a
            href="https://github.com/papodeagente/lp-template"
            className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition font-medium"
          >
            Ver repo
          </a>
        </div>
      </section>
    </main>
  );
}
