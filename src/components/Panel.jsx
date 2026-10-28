export default function Panel({ title, children }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white">
      <h3 className="border-b border-slate-200 px-4 py-3 font-medium text-slate-800">{title}</h3>
      {children}
    </section>
  );
}