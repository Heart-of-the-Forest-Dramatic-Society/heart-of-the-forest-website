"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { MobileNavBtn } from "./Mobile-Nav-Btn";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="static backdrop-blur-sm border-b bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center h-16">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={64}
                height={64}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Buttons, Links, User Menu and hidden hamburger menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-3">
              <Button
                className="ml-1 bg-primary/90 text-white hover:bg-primary/60 cursor-pointer"
                onClick={() => router.push("/book-tickets")}
              >
                Book Tickets
              </Button>
              <Button
                variant={"secondary"}
                onClick={() => router.push("/get-involved")}
                className="cursor-pointer"
              >
                Get Involved
              </Button>
            </div>
          </div>
          <MobileNavBtn />
        </div>
      </div>
    </nav>
  );
}
