import { About } from "@/components/layout/About";
import { Hero } from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Hero />
      <About />
    </main>
  );
}
