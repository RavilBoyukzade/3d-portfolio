import React from "react";
const blogPosts = [
  {
    id: 1,
    title: "Как я собираю 3D‑интерфейсы на React",
    date: "18 февраля 2026",
    excerpt:
      "Короткий разбор архитектуры портфолио: Canvas-сцены, анимации и адаптивность без перегруза UI.",
  },
  {
    id: 2,
    title: "Оптимизация производительности в Three.js",
    date: "10 февраля 2026",
    excerpt:
      "Практические шаги: контроль количества полигонов, lazy-load ассетов и профилирование рендеринга.",
  },
  {
    id: 3,
    title: "Tailwind + Framer Motion: хороший тандем",
    date: "2 февраля 2026",
    excerpt:
      "Как быстро верстать интерактивные блоки и поддерживать единый визуальный стиль в проекте.",
  },
];

const Blog = () => {
  return (
    <section className="relative z-0 mx-auto max-w-7xl px-6 py-28 sm:px-16">
      <h1 className="text-4xl font-black text-white sm:text-5xl">Блог</h1>
      <p className="mt-4 max-w-3xl text-[17px] leading-[28px] text-secondary">
        Здесь я делюсь заметками о фронтенде, 3D и разработке интерфейсов.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-white/10 bg-black-200 p-6 shadow-card"
          >
            <p className="text-sm text-secondary">{post.date}</p>
            <h2 className="mt-3 text-xl font-bold text-white">{post.title}</h2>
            <p className="mt-4 text-[15px] leading-6 text-secondary">{post.excerpt}</p>
            <button
              type="button"
              className="mt-6 rounded-lg bg-tertiary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Читать далее
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
