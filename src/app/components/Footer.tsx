import { useTranslations } from "next-intl";
import Link from "next/link"; // Sayfalar için Link bileşenini kullanıyoruz

// components/Footer.js
const Footer = () => {
  const t = useTranslations();
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
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100 "
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
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100"
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
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100"
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
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100"
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
                className="w-6 h-6 hover:opacity-80 transition-opacity border-2 border-blue-100"
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
          <Link href="#download" className="text-md hover:opacity-80">
            {t("download")}
          </Link>
        </div>
      </div>

      {/* Tüm Hakları Saklıdır */}
      <div className="text-center mt-4 text-gray-200">
        <p className="text-md">
          © {new Date().getFullYear()} {t("rights_reserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
