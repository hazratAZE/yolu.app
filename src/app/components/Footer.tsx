// components/Footer.js
const Footer = () => {
  return (
    <footer className="text-black py-6 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center space-x-6 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
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
            href="https://instagram.com"
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
            href="https://tiktok.com"
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
            href="https://twitter.com"
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
        <div className="text-left md:text-left mb-4 md:mb-0 flex flex-col items-start md:ml-12">
          <p className="text-lg">Email: yoluapplication@gmail.com</p>
          <p className="text-lg">Telefon: +994 55 374 98 01</p>
        </div>
      </div>

      {/* Tüm Hakları Saklıdır */}
      <div className="text-center mt-4">
        <p className="text-lg">
          © {new Date().getFullYear()} Yolu. Bütün hüquqlar qorunur
        </p>
      </div>
    </footer>
  );
};

export default Footer;
