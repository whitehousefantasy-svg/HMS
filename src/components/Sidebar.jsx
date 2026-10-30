const links = ["Dashboard", "Patients", "Doctors", "Appointments", "Billing"];

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="hidden w-56 shrink-0 bg-teal-800 p-4 text-white md:block">
      <h1 className="mb-8 text-xl font-semibold">MEDICARE HMS</h1>
      <nav className="space-y-1">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => onChange(l)}
            className={`block w-full rounded px-3 py-2 text-left text-sm transition ${
              active === l ? "bg-teal-950" : "hover:bg-teal-700"
            }`}
          >
            {l}
          </button>
        ))}
      </nav>
    </aside>
  );
}
