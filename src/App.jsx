import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Panel from "./components/Panel";
import StatCard from "./components/Statcard";
import PatientTable from "./components/PatientTable";
import PatientForm from "./components/PatientForm";
import AppointmentList from "./components/Appointmentlist";
import DataTable from "./components/Datatable";

const seedPatients = [
  { id: 1, name: "Grace Wanjiku", age: 34, ailment: "Malaria", status: "Admitted" },
  { id: 2, name: "Peter Otieno", age: 52, ailment: "Hypertension", status: "Outpatient" },
  { id: 3, name: "Amina Hassan", age: 27, ailment: "Fracture", status: "Discharged" },
];

const appointments = [
  { id: 1, patient: "Peter Otieno", doctor: "Dr. Kamau", time: "09:00" },
  { id: 2, patient: "Grace Wanjiku", doctor: "Dr. Njeri", time: "11:30" },
];

const doctors = [
  { name: "Dr. Kamau", department: "Cardiology", phone: "0712 000 001", availability: "Mon to Fri" },
  { name: "Dr. Njeri", department: "General", phone: "0712 000 002", availability: "Daily" },
  { name: "Dr. Mutua", department: "Orthopedics", phone: "0712 000 003", availability: "Tue and Thu" },
];

const invoices = [
  { invoice: "INV-001", patient: "Grace Wanjiku", amount: "KES 12,500", status: "Unpaid" },
  { invoice: "INV-002", patient: "Peter Otieno", amount: "KES 3,200", status: "Paid" },
  { invoice: "INV-003", patient: "Amina Hassan", amount: "KES 8,900", status: "Paid" },
];

const cols = (keys) => keys.map((k) => ({ key: k, label: k[0].toUpperCase() + k.slice(1) }));

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState(seedPatients);

  const shown = patients.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  const count = (s) => patients.filter((p) => p.status === s).length;

  const table = (
    <PatientTable
      patients={shown}
      onDelete={(id) => setPatients(patients.filter((p) => p.id !== id))}
    />
  );

  const form = (
    <Panel title="New patient">
      <PatientForm onAdd={(p) => setPatients([p, ...patients])} />
    </Panel>
  );

  const views = {
    Dashboard: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label="Total patients" value={patients.length} />
          <StatCard label="Admitted" value={count("Admitted")} tone="text-amber-600" />
          <StatCard label="Outpatients" value={count("Outpatient")} tone="text-sky-600" />
          <StatCard label="Discharged" value={count("Discharged")} tone="text-emerald-600" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Panel title="Patients">{table}</Panel>
          </div>
          <div className="space-y-6">
            {form}
            <Panel title="Today's appointments">
              <AppointmentList items={appointments} />
            </Panel>
          </div>
        </div>
      </div>
    ),
    Patients: (
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Panel title="All patients">{table}</Panel>
        </div>
        {form}
      </div>
    ),
    Doctors: (
      <Panel title="Doctors">
        <DataTable columns={cols(["name", "department", "phone", "availability"])} rows={doctors} />
      </Panel>
    ),
    Appointments: (
      <Panel title="Appointments">
        <DataTable columns={cols(["patient", "doctor", "time"])} rows={appointments} />
      </Panel>
    ),
    Billing: (
      <Panel title="Billing">
        <DataTable columns={cols(["invoice", "patient", "amount", "status"])} rows={invoices} />
      </Panel>
    ),
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar active={page} onChange={setPage} />
      <div className="flex flex-1 flex-col">
        <Navbar title={page} search={search} onSearch={setSearch} />
        <main className="flex-1 p-6">{views[page]}</main>
        <Footer />
      </div>
    </div>
  );
}