"use client";

import { Menu } from "lucide-react";
import type { Route } from "next";
import { useRouter } from "next/navigation";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function MobileNavBtn() {
  const router = useRouter();

  const NavLinksMobile = [
    { name: "Book Tickets", href: "/book-tickets" as Route },
    { name: "Get Involved", href: "/get-involved" as Route },
  ];

  return (
    <div className="flex md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger
          className={buttonVariants({ variant: "outline", size: "icon" })}
        >
          <Menu className="h-[1.2rem] w-[1.2rem]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {NavLinksMobile.map((link) => (
            <DropdownMenuItem
              key={link.name}
              onClick={() => router.push(link.href)}
            >
              {link.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
