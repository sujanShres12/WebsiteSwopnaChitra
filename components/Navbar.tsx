"use client";

import { useState } from "react";

const links = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#3D2A3D]/10 bg-[#F7F2EA]/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#home" className="font-[Cinzel] text-xl font-semibold tracking-[0.14em] text-[#67491D]">
          SWOPNA CHITRA
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-[0.14em] text-[#3D2A3D]/85 transition hover:text-[#76531D]"
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid gap-1.5 p-2 md:hidden"
        >
          <span className="h-px w-6 bg-[#3D2A3D]" />
          <span className="h-px w-6 bg-[#3D2A3D]" />
        </button>
      </div>
      {open && (
        <nav className="grid border-t border-[#3D2A3D]/10 bg-[#F7F2EA] px-5 pb-5 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="border-b border-[#3D2A3D]/10 py-4 text-sm font-medium uppercase tracking-[0.14em] text-[#3D2A3D]/90"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
