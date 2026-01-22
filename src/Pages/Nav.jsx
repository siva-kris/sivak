import React, { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-base-200">
      <div className="h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl">Siva</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <a href="#" className="px-4 text-lg">
            Home
          </a>
          <a href="#" className="px-4 text-lg">
            About
          </a>
          <a href="#" className="px-4 text-lg">
            Services
          </a>
          <a href="#" className="px-4 text-lg">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-base-200 px-4 pb-4">
          <a href="#" className="py-2 text-lg">
            Home
          </a>
          <a href="#" className="py-2 text-lg">
            About
          </a>
          <a href="#" className="py-2 text-lg">
            Services
          </a>
          <a href="#" className="py-2 text-lg">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
