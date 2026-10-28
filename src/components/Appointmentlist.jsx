export default function AppointmentList({ items }) {
  return (
    <ul className="divide-y divide-slate-100">
      {items.map((a) => (
        <li key={a.id} className="flex items-center justify-between px-4 py-3 text-sm">
          <div>
            <p className="font-medium text-slate-800">{a.patient}</p>
            <p className="text-slate-500">{a.doctor}</p>
          </div>
          <span className="text-slate-600">{a.time}</span>
        </li>
      ))}
    </ul>
  );
}
