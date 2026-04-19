"use client";

import { MoveDown } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 h-[calc(100vh-4rem)] flex items-center justify-center relative"
      id="hero"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-linear-to-r from-secondary-foreground to-primary bg-clip-text text-transparent pt-2 leading-tight transition-all duration-500 ease-out">
          Welcome to{" "}
          <span className="text-heart transition-all duration-500 ease-out">
            Heart
          </span>{" "}
          of the Forest <br /> Dramatic Society!
        </p>
        <div className="mt-8 flex space-x-4">
          <Link href="/get-involved">
            <Button className="text-xl font-semibold py-2 px-2 sm:px-4 cursor-pointer">
              Get Involved
            </Button>
          </Link>
          <Link href="/book-tickets">
            <Button
              className="text-xl font-semibold py-2 px-2 sm:px-4 cursor-pointer"
              variant={"secondary"}
            >
              Book Tickets
            </Button>
          </Link>
        </div>
      </div>

      <button
        className="absolute bottom-15 flex flex-col items-center cursor-pointer"
        type="button"
        onClick={scrollToAbout}
      >
        <p className={""}>Learn More</p>
        <MoveDown size={30} strokeWidth={3} className=" animate-bounce mt-3" />
      </button>
    </section>
  );
}
