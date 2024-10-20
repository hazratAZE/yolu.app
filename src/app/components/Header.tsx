"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sayfa yenileme fonksiyonu
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Yolu ikonu, tıklandığında sayfayı yeniler */}
        <div className="header-icon flex items-center" onClick={refreshPage}>
          <Image src="/icons/yolu.svg" alt="Yolu Icon" width={46} height={46} />
        </div>

        {/* Masaüstü Menüsü - %50 genişlikte sınırlandırıldı */}
        <nav className="hidden md:flex space-x-4 ml-auto max-w-[50%] w-full justify-end">
          <Link
            href="#intro"
            className={`relative hover:text-blue-400 ${
              activeSection === "intro" ? "text-blue-400 font-bold" : ""
            }`}
          >
            Giriş
          </Link>
          <Link
            href="#features"
            className={`relative hover:text-blue-400 ${
              activeSection === "features" ? "text-blue-400 font-bold" : ""
            }`}
          >
            Xüsusiyyətlər
          </Link>
          <Link
            href="#about"
            className={`relative hover:text-blue-400 ${
              activeSection === "about" ? "text-blue-400 font-bold" : ""
            }`}
          >
            Haqqında
          </Link>
          <Link
            href="#download"
            className={`relative hover:text-blue-400 ${
              activeSection === "download" ? "text-blue-400 font-bold" : ""
            }`}
          >
            Yüklə
          </Link>
        </nav>

        {/* Mobil Menüsü */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle text-white focus:outline-none"
          >
            {isMenuOpen ? "X" : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Dropdown Menü - Mobil İçin */}
      <nav
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-800 p-4`}
      >
        <div className="flex flex-col items-center space-y-2">
          <Link href="#intro" onClick={() => setIsMenuOpen(false)}>
            Giriş
          </Link>
          <Link href="#features" onClick={() => setIsMenuOpen(false)}>
            Xüsusiyyətlər
          </Link>
          <Link href="#about" onClick={() => setIsMenuOpen(false)}>
            Haqqında
          </Link>
          <Link href="#download" onClick={() => setIsMenuOpen(false)}>
            Yüklə
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
