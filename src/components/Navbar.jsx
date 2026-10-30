export default function Navbar({ title, search, onSearch }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
      <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      <div className="flex items-center gap-4">
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search patients"
          className="w-48 rounded-full border border-slate-300 px-4 py-1.5 text-sm outline-none focus:border-teal-600 sm:w-64"
        />
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-sm font-medium text-white">
          AD
        </div>
      </div>
    </header>
  );
}