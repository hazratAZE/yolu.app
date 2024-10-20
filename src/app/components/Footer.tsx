// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-20">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Yolu. Tüm hakları saklıdır.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#privacy" className="hover:underline">
            Gizlilik Politikası
          </a>
          <a href="#terms" className="hover:underline">
            Kullanım Şartları
          </a>
          <a href="#contact" className="hover:underline">
            İletişim
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
