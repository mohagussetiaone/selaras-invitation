"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Routes from "./Routes";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/app/assets/images/logo/logo.png";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleViewportChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };
    handleViewportChange(mediaQuery);
    mediaQuery.addEventListener("change", handleViewportChange);
    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 mx-auto z-[100] border-b border-primary bg-background">
        <div className="flex max-w-6xl mx-auto items-center justify-between p-2 md:px-0">
          <Link href="/" className="flex items-center">
            <Image width={60} height={60} src={Logo} alt="logo" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Routes onNavigate={() => setIsOpen(false)} />
          </div>
          <div className="hidden md:flex">
            <Link href="/home/contact">
              <Button>Contact</Button>
            </Link>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu className="w-8 h-8 md:hidden" />
            </SheetTrigger>
            <SheetContent className="md:hidden p-4 z-[999]">
              <SheetHeader>
                <SheetTitle className="flex mb-4">All Menu</SheetTitle>
                <Routes onNavigate={() => setIsOpen(false)} />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
