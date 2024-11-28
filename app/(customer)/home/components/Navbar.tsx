"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/logo/logo.png";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
// import ModalNavbar from "./ModalNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const baseHref = "/home";

  return (
    <>
      <nav className="sticky top-0 mx-auto z-[100] border-b border-primary bg-background">
        <div className="flex max-w-6xl mx-auto items-center justify-between py-2">
          <Link href="/" className="flex items-center">
            <Image width={60} height={60} src={Logo} alt="logo" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <ul className="md:flex text-sm items-center gap-4 mr-5 font-semibold text-text">
              <li>
                <Link href={`${baseHref}`}>Home</Link>
              </li>
              <li>
                <Link href={`/home/catalog`}>Katalog</Link>
              </li>
              <li>
                <Link href="/home/album">Album</Link>
              </li>
              <li>
                <Link href={`${baseHref}#testimonial`}>Testimoni</Link>
              </li>
              <li>
                <Link href={`/home/about`}>Tentang Kami</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
          <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-8 h-8" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
