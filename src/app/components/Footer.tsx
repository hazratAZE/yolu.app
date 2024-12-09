"use client";

import { useTranslations } from "next-intl";
import Link from "next/link"; // Sayfalar için Link bileşenini kullanıyoruz
import { useEffect, useState } from "react";

// components/Footer.js
interface CustomAlertProps {
  message: string;
  header: string;
  onClose: () => void;
  buttonText?: string; // Dışarıdan gelecek buton metni için opsiyonel prop
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  header,
  onClose,
  buttonText = "Bağla",
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-3xl p-6 shadow-lg md:w-[30%] sm:w-[90%] max-h-[80%] overflow-y-auto">
        <div className="text-black mb-4 text-lg font-semibold">{header}</div>
        <div className="text-gray-700 text-sm font-light text-center max-h-[50vh] overflow-y-auto">
          {message}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-6 py-2 rounded-full"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const t = useTranslations();

  useEffect(() => {
    const fetchAlertMessage = async () => {
      try {
        const lang = localStorage.getItem("selectedLanguage") || "en"; // Varsayılan olarak 'en' kullan
        const params = new URLSearchParams({ lang }); // Parametre ekleme
        const response = await fetch(
          `https://workly-l2vi.onrender.com/api/v1/about/terms?${params}`
        );
        if (!response.ok) {
          throw new Error("Sunucudan geçerli bir cevap alınamadı.");
        }
        const data = await response.json();
        console.log(data.data);
        setAlertMessage(data.data || "Varsayılan mesaj burada.");
      } catch (error) {
        console.error("Mesaj alınamadı:", error);
        setAlertMessage("Mesaj alınamadı, lütfen daha sonra tekrar deneyin.");
      }
    };

    fetchAlertMessage();
  }, []);

  const closeAlert = () => {
    setAlertVisible(false);
  };
  return (
    <footer
      id="footer"
      className="text-gray-50 py-6 bg-black w-full font-sans  px-4 md:px-16 lg:px-32 pt-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center md:items-start mb-12">
        {/* Sol Taraf: İletişim Bilgileri ve Sosyal Medya İkonları */}
        <div className="flex flex-col text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-lg font-semibold">{t("contact_us")}</h3>
          <p className="text-md text-gray-400">{t("email")}: info@yolu.app</p>
          <p className="text-md text-gray-400">
            {t("phone")}: +994 55 374 98 01
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/company/101312119/admin/feed/posts/?feedType=following"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <img
                src="/icons/linkedin.svg"
                alt="Linkedin"
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100 rounded-full"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556691660894"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100 rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/yolu.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100 rounded-full"
              />
            </a>
            <a
              href="https://www.tiktok.com/@yolu_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <img
                src="/icons/tiktok.svg"
                alt="TikTok"
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100 rounded-full"
              />
            </a>
            <a
              href="https://twitter.com/YoluApp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img
                src="/icons/x.svg"
                alt="Twitter"
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100 rounded-full"
              />
            </a>
          </div>
        </div>

        {/* Sağ Taraf: Sayfalar */}
        <div className="flex flex-col justify-start items-center sm:items-start">
          <Link href="#intro" className="text-md hover:opacity-80 mb-2">
            {t("intro")}
          </Link>
          <Link href="#about" className="text-md hover:opacity-80 mb-2">
            {t("about")}
          </Link>
          <Link href="#features" className="text-md hover:opacity-80 mb-2">
            {t("features")}
          </Link>
          <Link href="#faq" className="text-md hover:opacity-80 mb-2">
            FAQ
          </Link>
          <Link href="#download" className="text-md hover:opacity-80 mb-2">
            {t("download")}
          </Link>
          <Link
            href="#footer"
            onClick={() => setAlertVisible(true)}
            className="text-md hover:opacity-80 text-orange-600 text-sm"
          >
            {t("terms_conditions")}
          </Link>
        </div>
      </div>

      {/* Tüm Hakları Saklıdır */}
      <div className="text-center mt-4 text-gray-200">
        <p className="text-md">
          © {new Date().getFullYear()} {t("rights_reserved")}
        </p>
      </div>
      {isAlertVisible && alertMessage && (
        <CustomAlert
          message={alertMessage}
          header={t("terms_conditions")}
          buttonText={t("close")}
          onClose={closeAlert}
        />
      )}
    </footer>
  );
};

export default Footer;
