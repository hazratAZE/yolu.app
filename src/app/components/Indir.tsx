"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Indir = () => {
  const t = useTranslations();

  return (
    <section
      id="download"
      className="min-h-screen flex flex-col items-center bg-blue-50 justify-center px-4 md:px-16 lg:px-32 pt-16 font-sans pb-20"
    >
      <h1 className="text-black font-bold mb-4">{t("download")}</h1>

      {/* Flexbox kullanarak resim ve metin düzeni */}
      <div className="flex flex-col md:flex-row items-stretch justify-center w-full">
        {/* Paragraf Sol Taraf */}
        <div className="md:w-3/5 flex flex-col justify-center items-baseline p-6  overflow-hidden">
          <h2 className="text-black mb-4 font-semibold">
            {t("why_i_download")}
          </h2>
          <p className="text-gray-700 text-left mb-4">
            {t("explore_features")}
          </p>
          <Link
            href={"#intro"}
            className="px-8 py-3 text-black font-sans font-medium border-gray-900 border-2 rounded-full hover:bg-blue-800 hover:text-white hover:border-blue-800 bg-blue-50 shadow-md"
          >
            {t("download")}{" "}
            {/* Burada "learn_more" çevirisini kullanabilirsiniz */}
          </Link>
        </div>
        {/* Resim Sağ Taraf */}
        <div className="flex flex-col items-center justify-center flex-1 order-1 md:order-2">
          <img
            src="/images/mockup7.png"
            alt="Hakkımızda"
            className="sm:h-[540px] sm:w-[360px] lg:h-[600px] lg:w-[400px] h-[300px] w-[200px] order-1 md:order-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Indir;
