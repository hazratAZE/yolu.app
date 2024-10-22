// components/Footer.js
const Footer = () => {
  return (
    <footer className="text-black py-6 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center space-x-6 mb-4 md:mb-0">
          <a
            href="https://www.linkedin.com/company/101312119/admin/feed/posts/?feedType=following"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/icons/linkedin.svg"
              alt="Linkedin"
              className="w-8 h-8 hover:opacity-80 transition-opacity"
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
              className="w-8 h-8 hover:opacity-80 transition-opacity"
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
              className="w-8 h-8 hover:opacity-80 transition-opacity"
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
              className="w-8 h-8 hover:opacity-80 transition-opacity"
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
              className="w-8 h-8 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* İletişim Bilgileri */}
        <div className="text-center mb-4 md:mb-0 flex flex-col md:ml-12">
          <p className="text-md">Email: info@yolu.app</p>
          <p className="text-md">Telefon: +994 55 374 98 01</p>
        </div>
      </div>

      {/* Tüm Hakları Saklıdır */}
      <div className="text-center mt-4">
        <p className="text-md">
          © {new Date().getFullYear()} Yolu. Bütün hüquqlar qorunur
        </p>
      </div>
    </footer>
  );
};

export default Footer;
