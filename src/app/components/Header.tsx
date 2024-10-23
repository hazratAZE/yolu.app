"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// Dil türü belirliyoruz
type Language = "az" | "en" | "ru" | "tr";

const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false); // Dil dropdown durumu
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("az"); // Varsayılan dil
  const pathname = usePathname(); // Aktif yol
  // Bayrak dosyaları eşlemesi
  const flagMap = {
    az: "/icons/az-flag.svg",
    en: "/icons/uk-flag.svg",
    tr: "/icons/tr-flag.svg",
    ru: "/icons/ru-flag.svg",
  };
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") as Language;
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);
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

  // Dil değişimi fonksiyonu (TypeScript uyumlu)
  const changeLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsLangDropdownOpen(false);
    localStorage.setItem("selectedLanguage", lang);
    console.log("Dil değişti:", lang);
    // Yeni path'i oluşturun: mevcut path'den son dil kodunu çıkarıp yenisini ekleyin
    const newPath = pathname.replace(
      /\/[a-z]{2}$/,
      `/${lang.toLocaleLowerCase()}`
    ); // /en veya /az gibi dil kodunu al ve yenisi ile değiştir

    // Router ile yönlendirme yap
    router.push(newPath);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Yolu ikonu, en solda sabit */}
        <div className="header-icon flex items-center" onClick={refreshPage}>
          <Image src="/icons/yolu.svg" alt="Yolu Icon" width={46} height={46} />
        </div>

        {/* Masaüstü Menüsü ve Dil Dropdown */}
        <div className="flex items-center ml-auto space-x-4 max-w-[50%] w-full justify-end">
          <nav className="hidden md:flex space-x-4">
            <Link
              href="#intro"
              className={`relative hover:text-blue-400 ${
                activeSection === "intro" ? "text-blue-400 font-bold" : ""
              }`}
            >
              {t("intro")}
            </Link>
            <Link
              href="#about"
              className={`relative hover:text-blue-400 ${
                activeSection === "about" ? "text-blue-400 font-bold" : ""
              }`}
            >
              {t("about")}
            </Link>
            <Link
              href="#features"
              className={`relative hover:text-blue-400 ${
                activeSection === "features" ? "text-blue-400 font-bold" : ""
              }`}
            >
              {t("features")}
            </Link>
            <Link
              href="#download"
              className={`relative hover:text-blue-400 ${
                activeSection === "download" ? "text-blue-400 font-bold" : ""
              }`}
            >
              {t("download")}
            </Link>

            {/* Dil Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-white focus:outline-none"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              >
                {/* Seçilen dil ve bayrak */}
                <Image
                  src={flagMap[selectedLanguage]}
                  alt={`${selectedLanguage.toUpperCase()} Flag`}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {selectedLanguage.toUpperCase()}{" "}
                <span className="ml-2">&#9662;</span>
              </button>
              {isLangDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-gray-700 text-white py-2 w-32 shadow-lg rounded">
                  <li
                    className="px-4 py-2 flex items-center hover:bg-gray-600 cursor-pointer"
                    onClick={() => changeLanguage("az")}
                  >
                    <Image
                      src={flagMap.az}
                      alt="Azerbaijan Flag"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    AZ
                  </li>
                  <li
                    className="px-4 py-2 flex items-center hover:bg-gray-600 cursor-pointer"
                    onClick={() => changeLanguage("en")}
                  >
                    <Image
                      src={flagMap.en}
                      alt="UK Flag"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    EN
                  </li>
                  <li
                    className="px-4 py-2 flex items-center hover:bg-gray-600 cursor-pointer"
                    onClick={() => changeLanguage("tr")}
                  >
                    <Image
                      src={flagMap.tr}
                      alt="Turkey Flag"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    TR
                  </li>
                  <li
                    className="px-4 py-2 flex items-center hover:bg-gray-600 cursor-pointer"
                    onClick={() => changeLanguage("ru")}
                  >
                    <Image
                      src={flagMap.ru}
                      alt="Russia Flag"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    RU
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>

        {/* Mobil Menüsü */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle text-white focus:outline-none text-lg"
          >
            {isMenuOpen ? <span>&#215;</span> : <span>&#9776;</span>}
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
          <Link
            href="#intro"
            onClick={() => setIsMenuOpen(false)}
            className={`relative hover:text-blue-400 ${
              activeSection === "intro" ? "text-blue-400 font-bold" : ""
            }`}
          >
            {t("intro")}
          </Link>
          <Link
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className={`relative hover:text-blue-400 ${
              activeSection === "about" ? "text-blue-400 font-bold" : ""
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="#features"
            onClick={() => setIsMenuOpen(false)}
            className={`relative hover:text-blue-400 ${
              activeSection === "features" ? "text-blue-400 font-bold" : ""
            }`}
          >
            {t("features")}
          </Link>
          <Link
            href="#download"
            onClick={() => setIsMenuOpen(false)}
            className={`relative hover:text-blue-400 ${
              activeSection === "download" ? "text-blue-400 font-bold" : ""
            }`}
          >
            {t("download")}
          </Link>

          {/* Dil Dropdown - Mobilde de mevcut */}
          <div className="relative">
            <button
              className="flex items-center text-white focus:outline-none"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              {/* Seçilen dil ve bayrak mobilde de görünsün */}
              <Image
                src={flagMap[selectedLanguage]}
                alt={`${selectedLanguage.toUpperCase()} Flag`}
                width={20}
                height={20}
                className="mr-2"
              />
              {selectedLanguage.toUpperCase()}{" "}
              <span className="ml-2">&#9662;</span>
            </button>
            {isLangDropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-gray-700 text-white py-2 w-32 shadow-lg rounded">
                <li
                  className="px-4 py-2 flex items-center hover:bg-gray-600 cursor-pointer"
                  onClick={() => changeLanguage("az")}
                >
                  <Image
                    src={flagMap.az}
                    alt="Azerbaijan Flag"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  AZ
                </li>
                <li
                  className="px-4 py-2 flex items-center hover:bg-gray-600 cursor-pointer"
                  onClick={() => changeLanguage("en")}
                >
                  <Image
                    src={flagMap.en}
                    alt="UK Flag"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  EN
                </li>
                <li
                  className="px-4 py-2 flex items-center hover:bg-gray-600 cursor-pointer"
                  onClick={() => changeLanguage("tr")}
                >
                  <Image
                    src={flagMap.tr}
                    alt="Turkey Flag"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  TR
                </li>
                <li
                  className="px-4 py-2 flex items-center hover:bg-gray-600 cursor-pointer"
                  onClick={() => changeLanguage("ru")}
                >
                  <Image
                    src={flagMap.ru}
                    alt="Russia Flag"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  RU
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
