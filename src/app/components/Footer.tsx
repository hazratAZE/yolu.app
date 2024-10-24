import { useTranslations } from "next-intl";

// components/Footer.js
const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="text-white py-6 mt-20 pt-20 bg-gray-800 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mb-12">
        {/* Sosyal Medya İkonları */}
        <div className="text-center flex flex-col mb-4 md:mb-0 sm:mb-8">
          <p className="text-md">{t("email")}: info@yolu.app</p>
          <p className="text-md">{t("phone")}: +994 55 374 98 01</p>
        </div>
        <div className="flex justify-center space-x-6 md:ml-12 ">
          <a
            href="https://www.linkedin.com/company/101312119/admin/feed/posts/?feedType=following"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/icons/linkedin.svg"
              alt="Linkedin"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
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
              className="w-6 h-6 hover:opacity-80 transition-opacity"
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
              className="w-6 h-6 hover:opacity-80 transition-opacity"
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
              className="w-6 h-6 hover:opacity-80 transition-opacity"
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
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </a>
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
