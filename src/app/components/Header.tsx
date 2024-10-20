"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100; // Scroll pozisyonunu ayarlayın

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

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Uygulama İkonu - En Solda */}
        <div className="flex items-center">
          <Image
            src="/icons/yolu.svg" // SVG ikonunun yolu
            alt="Yolu Icon"
            width={46}
            height={46}
          />
        </div>
        {/* Navigasyon Linkleri (Desktop için) */}
        <nav className="hidden md:flex space-x-4 ml-auto">
          <Link
            href="#intro"
            className={`relative hover:text-blue-400 ${
              activeSection === "intro" ? "text-blue-400 font-bold" : ""
            } text-lg`}
          >
            Giriş
            <span
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400 transition-all duration-300 ${
                activeSection === "intro" ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>
          <Link
            href="#features"
            className={`relative hover:text-blue-400 ${
              activeSection === "features" ? "text-blue-400 font-bold" : ""
            } text-lg`}
          >
            Özellikler
            <span
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400 transition-all duration-300 ${
                activeSection === "features" ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>
          <Link
            href="#about"
            className={`relative hover:text-blue-400 ${
              activeSection === "about" ? "text-blue-400 font-bold" : ""
            } text-lg`}
          >
            Hakkımızda
            <span
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400 transition-all duration-300 ${
                activeSection === "about" ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>
          <Link
            href="#download"
            className={`relative hover:text-blue-400 ${
              activeSection === "download" ? "text-blue-400 font-bold" : ""
            } text-lg`}
          >
            İndir
            <span
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400 transition-all duration-300 ${
                activeSection === "download" ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>
        </nav>

        {/* Mobil Menü Düğmesi */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? "X" : <span>&#9776;</span>} {/* Hamburger iconu */}
          </button>
        </div>
      </div>
      {/* Dropdown Menü (Mobil için) */}
      <nav
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-800 p-4`}
      >
        <div className="flex flex-col items-center space-y-2">
          {" "}
          {/* items-center eklendi */}
          <Link
            href="#intro"
            className={`relative hover:text-blue-400 ${
              activeSection === "intro" ? "text-blue-400 font-bold" : ""
            } text-base`}
            onClick={() => setIsMenuOpen(false)} // Menüyü kapat
          >
            Giriş
          </Link>
          <Link
            href="#features"
            className={`relative hover:text-blue-400 ${
              activeSection === "features" ? "text-blue-400 font-bold" : ""
            } text-base`}
            onClick={() => setIsMenuOpen(false)} // Menüyü kapat
          >
            Özellikler
          </Link>
          <Link
            href="#about"
            className={`relative hover:text-blue-400 ${
              activeSection === "about" ? "text-blue-400 font-bold" : ""
            } text-base`}
            onClick={() => setIsMenuOpen(false)} // Menüyü kapat
          >
            Hakkımızda
          </Link>
          <Link
            href="#download"
            className={`relative hover:text-blue-400 ${
              activeSection === "download" ? "text-blue-400 font-bold" : ""
            } text-base`}
            onClick={() => setIsMenuOpen(false)} // Menüyü kapat
          >
            İndir
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
