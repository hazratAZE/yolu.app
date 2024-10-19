// src/app/components/Header.tsx

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Uygulama İkonu */}
        <div className="flex items-center">
          <Image
            src="/icons/yolu.svg" // SVG ikonunun yolu
            alt="Yolu Icon"
            width={40}
            height={40}
          />
        </div>
        {/* Navigasyon Linkleri */}
        <nav className="flex space-x-4">
          <Link href="#login" className="hover:underline">
            Giriş
          </Link>
          <Link href="#features" className="hover:underline">
            Özellikler
          </Link>
          <Link href="#about" className="hover:underline">
            Hakkımızda
          </Link>
          <Link href="#download" className="hover:underline">
            İndir
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
