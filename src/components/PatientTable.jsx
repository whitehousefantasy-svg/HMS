const badge = {
  Admitted: "bg-amber-100 text-amber-800",
  Outpatient: "bg-sky-100 text-sky-800",
  Discharged: "bg-emerald-100 text-emerald-800",
};

export default function PatientTable({ patients, onDelete }) {
  if (!patients.length) {
    return <p className="p-6 text-sm text-slate-500">No patients found. Add one using the form.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-slate-200 text-slate-500">
          <tr>
            <th className="px-4 py-2 font-medium">Name</th>
            <th className="px-4 py-2 font-medium">Age</th>
            <th className="px-4 py-2 font-medium">Ailment</th>
            <th className="px-4 py-2 font-medium">Status</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-b border-slate-100 last:border-0">
              <td className="px-4 py-2 font-medium text-slate-800">{p.name}</td>
              <td className="px-4 py-2">{p.age}</td>
              <td className="px-4 py-2">{p.ailment}</td>
              <td className="px-4 py-2">
                <span className={`rounded-full px-2 py-0.5 text-xs ${badge[p.status]}`}>{p.status}</span>
              </td>
              <td className="px-4 py-2 text-right">
                <button onClick={() => onDelete(p.id)} className="text-xs text-red-600 hover:underline">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}