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

  const refreshPage = () => {
    window.location.reload();
  };

  const changeLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsLangDropdownOpen(false);
    localStorage.setItem("selectedLanguage", lang);
    const newPath = pathname.replace(
      /\/[a-z]{2}$/,
      `/${lang.toLocaleLowerCase()}`
    );

    router.push(newPath);
  };
  const scrollToContact = () => {
    // Sayfanın en altına kaydırmak için window.scrollTo kullanabilirsiniz
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <header className="bg-black text-white p-4 fixed w-full z-50 opacity-95">
      <div className="container mx-auto flex justify-between items-center ">
        <div
          className="header-icon flex items-center"
          onClick={refreshPage}
          style={{ cursor: "pointer" }}
        >
          <Image src="/icons/yolu.svg" alt="Yolu Icon" width={46} height={46} />
        </div>

        <div className="flex items-center ml-auto space-x-4 max-w-[50%] w-full justify-end">
          <nav className="hidden md:flex space-x-4 text-gray-300 items-center">
            <Link
              href="#intro"
              className={`relative text-sm  hover:text-white ${
                activeSection === "intro" ? "text-white font-bold" : ""
              }`}
            >
              {t("intro")}
            </Link>
            <Link
              href="#about"
              className={`relative text-sm hover:text-white ${
                activeSection === "about" ? "text-white font-bold" : ""
              }`}
            >
              {t("about")}
            </Link>
            <Link
              href="#features"
              className={`relative text-sm hover:text-white ${
                activeSection === "features" ? "text-white font-bold" : ""
              }`}
            >
              {t("features")}
            </Link>
            <Link
              href="#download"
              className={`relative text-sm hover:text-white ${
                activeSection === "download" ? "text-white font-bold" : ""
              }`}
            >
              {t("download")}
            </Link>

            {/* "Contact Us" Button */}
            <Link
              onClick={scrollToContact}
              href="#footer"
              className="text-sm px-4 py-2 bg-blue-400 text-black rounded-full font-medium hover:bg-blue-300 border border-black"
            >
              {t("contact_us")}
            </Link>

            <div className="relative">
              <button
                className="flex items-center text-sm text-gray-300 focus:outline-none mx-4"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              >
                <Image
                  src={flagMap[selectedLanguage]}
                  alt={`${selectedLanguage.toUpperCase()} Flag`}
                  width={17}
                  height={17}
                  className="mr-2"
                />
                {selectedLanguage.toUpperCase()}{" "}
                <span className="ml-2">&#9662;</span>
              </button>
              {isLangDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-gray-900 text-white py-2 w-32 shadow-lg rounded">
                  <li
                    className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer text-sm"
                    onClick={() => changeLanguage("az")}
                  >
                    <Image
                      src={flagMap.az}
                      alt="Azerbaijan Flag"
                      width={17}
                      height={17}
                      className="mr-2"
                    />{" "}
                    AZ
                  </li>
                  <li
                    className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer text-sm"
                    onClick={() => changeLanguage("en")}
                  >
                    <Image
                      src={flagMap.en}
                      alt="UK Flag"
                      width={17}
                      height={17}
                      className="mr-2"
                    />{" "}
                    EN
                  </li>
                  <li
                    className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer text-sm"
                    onClick={() => changeLanguage("tr")}
                  >
                    <Image
                      src={flagMap.tr}
                      alt="Turkey Flag"
                      width={17}
                      height={17}
                      className="mr-2"
                    />{" "}
                    TR
                  </li>
                  <li
                    className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer text-sm"
                    onClick={() => changeLanguage("ru")}
                  >
                    <Image
                      src={flagMap.ru}
                      alt="Russia Flag"
                      width={17}
                      height={17}
                      className="mr-2"
                    />{" "}
                    RU
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle text-white focus:outline-none text-lg"
          >
            {isMenuOpen ? <span>&#215;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      <nav
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-black p-4`}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-300">
          <Link
            href="#intro"
            onClick={() => setIsMenuOpen(false)}
            className={`relative text-sm hover:text-white ${
              activeSection === "intro" ? "text-white font-bold" : ""
            }`}
          >
            {t("intro")}
          </Link>
          <Link
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className={`relative text-sm hover:text-white ${
              activeSection === "about" ? "text-white font-bold" : ""
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="#features"
            onClick={() => setIsMenuOpen(false)}
            className={`relative text-sm hover:text-white ${
              activeSection === "features" ? "text-white font-bold" : ""
            }`}
          >
            {t("features")}
          </Link>
          <Link
            href="#download"
            onClick={() => setIsMenuOpen(false)}
            className={`relative text-sm hover:text-white ${
              activeSection === "download" ? "text-white font-bold" : ""
            }`}
          >
            {t("download")}
          </Link>

          {/* Mobile "Contact Us" Button */}
          <Link
            onClick={scrollToContact}
            href="#footer"
            className="text-sm px-4 py-2 bg-blue-400 text-black rounded-full font-medium hover:bg-blue-300 border border-black"
          >
            {t("contact_us")}
          </Link>

          <div className="relative">
            <button
              className="flex items-center text-gray-300 focus:outline-none mt-2 text-sm"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <Image
                src={flagMap[selectedLanguage]}
                alt={`${selectedLanguage.toUpperCase()} Flag`}
                width={17}
                height={17}
                className="mr-2"
              />
              {selectedLanguage.toUpperCase()}{" "}
              <span className="ml-2">&#9662;</span>
            </button>
            {isLangDropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-gray-900 text-white py-2 w-32 shadow-lg rounded">
                <li
                  className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer text-sm"
                  onClick={() => changeLanguage("az")}
                >
                  <Image
                    src={flagMap.az}
                    alt="Azerbaijan Flag"
                    width={17}
                    height={17}
                    className="mr-2"
                  />{" "}
                  AZ
                </li>
                <li
                  className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer text-sm"
                  onClick={() => changeLanguage("en")}
                >
                  <Image
                    src={flagMap.en}
                    alt="UK Flag"
                    width={17}
                    height={17}
                    className="mr-2"
                  />{" "}
                  EN
                </li>
                <li
                  className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer text-sm"
                  onClick={() => changeLanguage("tr")}
                >
                  <Image
                    src={flagMap.tr}
                    alt="Turkey Flag"
                    width={17}
                    height={17}
                    className="mr-2"
                  />{" "}
                  TR
                </li>
                <li
                  className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer text-sm"
                  onClick={() => changeLanguage("ru")}
                >
                  <Image
                    src={flagMap.ru}
                    alt="Russia Flag"
                    width={17}
                    height={17}
                    className="mr-2"
                  />{" "}
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
