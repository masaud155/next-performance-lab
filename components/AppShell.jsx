import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AppShell({ children }) {
  return (
    <main className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
