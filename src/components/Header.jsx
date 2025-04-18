import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#121212] text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl border border-[#e72323de] px-6 py-3 bg-[#1a1a1a]">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-xl font-semibold">
          <span className="text-[#e72323de]">&lt;<span >Otobi.<span className="text-gray-300"> Dev</span></span> /&gt;</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-lg">
          <a href="#about" className="hover:text-[#e72323de] transition">About Me</a>
          <a href="#resume" className="hover:text-[#e72323de] transition">Resume</a>
          <a href="#contact" className="hover:text-[#e72323de] transition">Contacts</a>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center space-y-4">
          <a href="#about" className="hover:text-[#14f195]">About Me</a>
          <a href="#resume" className="hover:text-[#14f195]">Resume</a>
          <a href="#contact" className="hover:text-[#14f195]">Contacts</a>
          <div className="flex space-x-4 mt-2">
            
          </div>
        </div>
      )}
    </header>
  );
}
