"use client";
import { useTranslations } from "next-intl";
import { useState } from "react"; // useState'i içe aktar
import React from "react";

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

interface CustomAlertProps {
  message: string;
  onClose: () => void;
  buttonText?: string; // Dışarıdan gelecek buton metni için opsiyonel prop
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  onClose,
  buttonText = "Bağla",
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-3xl p-6 shadow-lg md:w-[30%] sm:w-[90%]">
        <h2 className="text-black text-md font-light text-center">{message}</h2>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-6 py-2 rounded-full"
          >
            {buttonText} {/* Dışarıdan alınan buton metni */}
          </button>
        </div>
      </div>
    </div>
  );
};

const Indir = () => {
  const t = useTranslations();
  const [isAlertVisible, setAlertVisible] = useState(false); // Alert'in görünürlüğünü kontrol etmek için durum

  const handleIOSClick = () => {
    setAlertVisible(true); // Alert'i görünür yap
  };

  const closeAlert = () => {
    setAlertVisible(false); // Alert'i gizle
  };

  return (
    <section
      id="download"
      className="min-h-screen flex flex-col items-center justify-center pt-16 md:px-2"
    >
      <h1 className="text-black font-bold mb-4">{t("download")}</h1>

      {/* Flexbox kullanarak resim ve metin düzeni */}
      <div className="flex flex-col md:flex-row items-stretch justify-center w-full">
        {/* Paragraf Sol Taraf */}
        <div className="md:w-3/5 flex items-center bg-gray-800 p-6  overflow-hidden">
          <p className="text-white text-[16px] font-light text-left mb-0 md:px-4">
            {t("explore_features")}
          </p>
        </div>
        {/* Resim Sağ Taraf */}
        <div className="md:w-2/5 flex items-center">
          <img
            src="/images/screen.png" // Resmin yolu (kendi resminizi buraya koyun)
            alt="Uygulama İndirme"
            className="w-full h-[420px] object-cover" // Resim boyutunu ayarlayın
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-lg mt-24 px-4">
        <div className="relative w-full md:w-3/4">
          <a
            className="flex justify-center items-center gap-4 bg-gray-800 text-white px-10 py-6 rounded-full font-bold hover:bg-gray-900 transition-all"
            aria-label="iOS üçün yükləyin"
            onClick={handleIOSClick}
          >
            <img
              src="/icons/ios.svg" // Dışardan iOS ikon SVG dosyası
              alt="iOS icon"
              className="w-12 h-12" // İkonun boyutlarını artırdım
            />
            <span className="downloadText">{t("download_ios")}</span>
          </a>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.yolu.app"
          className="w-full md:w-3/4 flex justify-center items-center gap-4 bg-gray-800 text-white px-10 py-6 rounded-full  font-bold hover:bg-gray-900 transition-all"
          aria-label="Android üçün yükləyin"
          target="_blank" // Yeni sekmede açmak için ekle
          rel="noopener noreferrer"
        >
          <img
            src="/icons/android.svg" // Dışardan Android ikon SVG dosyası
            alt="Android icon"
            className="w-12 h-12" // İkonun boyutlarını artırdım
          />
          <span className="downloadText">{t("download_android")}</span>
        </a>
      </div>

      {/* Custom Alert Bileşeni */}
      {isAlertVisible && (
        <CustomAlert
          message={t("ios_warn")}
          buttonText={t("close")}
          onClose={closeAlert}
        />
      )}
    </section>
  );
};

export default Indir;
