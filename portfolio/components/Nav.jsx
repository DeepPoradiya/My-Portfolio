"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Links from "@/config/site";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          }capitalize font-medium hover:text-accent transition-all`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
