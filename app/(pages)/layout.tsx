import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex flex-col">
      <Navbar />
      {children}
      <Footer />
      <div className="fixed bottom-0 right-0 p-6 z-50">
        <ThemeToggle />
      </div>
    </main>
  );
}
