"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
const Hakkımızda = () => {
  const t = useTranslations();
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen bg-blue-50 md:px-16 lg:px-32 px-4 pt-16 font-sans"
    >
      {/* Başlık */}
      <h1 className="font-bold text-black text-center mb-2">
        {t("about")} {/* Başlık */}
      </h1>

      {/* İçerik */}
      <div className="container mx-auto flex flex-col md:flex-row items-center mb-8">
        {/* Sol taraf - Resim */}
        <div className="md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
          <img
            src="/images/iphonemock2.png" // Sol taraf resim için kaynak
            alt="Hakkımızda"
            className="sm:h-[540px] sm:w-[360px] lg:h-[600px] lg:w-[400px] h-[300px] w-[200px]"
          />
        </div>

        {/* Sağ taraf - Metin */}
        <div className="md:w-1/2 text-center md:text-left md:order-2 order-1">
          <h2 className="font-bold text-gray-800 mb-4">
            <span className="text-blue-700">Yolu</span>, {t("yolu_desc")}
          </h2>
          <p className="text-gray-800 mb-10">{t("yolu_startup_desc")}</p>{" "}
          {/* Vizyonumuz Açıklaması */}
          {/* Buton */}
          <Link
            href={"#features"}
            className="px-12 py-4 border border-black text-black font-sans rounded-xl hover:bg-blue-100 bg-white"
          >
            {t("features")}{" "}
            {/* Burada "learn_more" çevirisini kullanabilirsiniz */}
          </Link>
        </div>
      </div>

      {/* Mobil uyum için düzenleme */}
      <style jsx>{`
        @media (max-width: 768px) {
          #about .container {
            display: flex;
            flex-direction: column-reverse; /* Mobilde metni yukarı taşı */
          }
        }
      `}</style>
    </section>
  );
};

export default Hakkımızda;
