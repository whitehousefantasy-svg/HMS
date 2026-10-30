export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 bg-white px-6 py-3 text-sm text-slate-500 sm:flex-row">
      <p>{new Date().getFullYear()} MEDICARE HMS. All RIGHTS RESERVED.</p>
      <div className="flex gap-4">
        <span>Support</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>
    </footer>
  );
}
