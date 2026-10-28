import { useState } from "react";

const empty = { name: "", age: "", ailment: "", status: "Outpatient" };
const field = "w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600";

export default function Patientform({ onAdd }) {
  const [form, setForm] = useState(empty);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (!form.name || !form.age || !form.ailment) return;
    onAdd({ ...form, id: Date.now(), age: Number(form.age) });
    setForm(empty);
  };

  return (
    <div className="space-y-3 p-4">
      <input name="name" value={form.name} onChange={update} placeholder="Full name" className={field} />
      <input name="age" type="number" value={form.age} onChange={update} placeholder="Age" className={field} />
      <input name="ailment" value={form.ailment} onChange={update} placeholder="Ailment" className={field} />
      <select name="status" value={form.status} onChange={update} className={field}>
        <option>Outpatient</option>
        <option>Admitted</option>
        <option>Discharged</option>
      </select>
      <button onClick={submit} className="w-full rounded bg-teal-700 py-2 text-sm font-medium text-white hover:bg-teal-800">
        Add patient
      </button>
    </div>
  );
}