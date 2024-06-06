import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Nav";
import MobileNavbar from "./MobileNavbar";

function Header() {
  
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="font-semibold text-4xl">
            DEEP<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href='/contact'>
            <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
            <MobileNavbar/>
        </div>
      </div>
    </header>
  );
}

export default Header;
