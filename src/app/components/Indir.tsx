"use client";
import { useState } from "react"; // useState'i içe aktar
import React from "react";

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-black text-lg font-bold text-center">{message}</h2>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            Bağla
          </button>
        </div>
      </div>
    </div>
  );
};

const Indir = () => {
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
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-black font-bold mb-4">Yüklə</h1>
      <p className="text-gray-600 text-center mb-10 w-[80%]">
        Uygulamamızın üstün xüsusiyyətlərini kəşf edin! İstədiyiniz zaman,
        istədiyiniz yerdə sərfəli təkliflərdən yararlanmaq üçün dərhal yükləyin.
        Sizin üçün yaradılmış mükəmməl bir tətbiq ilə bütün imkanlardan
        faydalanın.
      </p>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-lg">
        <div className="relative w-full md:w-3/4">
          <a
            className="flex justify-center items-center gap-4 bg-white text-black px-10 py-8 rounded-full text-2xl font-bold hover:bg-blue-100 transition-all"
            aria-label="iOS üçün yükləyin"
            onClick={handleIOSClick}
          >
            <img
              src="/icons/ios.svg" // Dışardan iOS ikon SVG dosyası
              alt="iOS icon"
              className="w-10 h-10" // İkonun boyutlarını artırdım
            />
            <span>iOS üçün Yükləyin</span>
          </a>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.yolu.app"
          className="w-full md:w-3/4 flex justify-center items-center gap-4 bg-white text-black px-10 py-8 rounded-full text-2xl font-bold hover:bg-blue-100 transition-all"
          aria-label="Android üçün yükləyin"
          target="_blank" // Yeni sekmede açmak için ekle
          rel="noopener noreferrer"
        >
          <img
            src="/icons/android.svg" // Dışardan Android ikon SVG dosyası
            alt="Android icon"
            className="w-10 h-10" // İkonun boyutlarını artırdım
          />
          <span>Android üçün Yükləyin</span>
        </a>
      </div>

      {/* Custom Alert Bileşeni */}
      {isAlertVisible && (
        <CustomAlert
          message="Tətbiq iOS üçün hələ əlavə edilməyib, çox yaxında iOS-da mövcud olacaq."
          onClose={closeAlert}
        />
      )}
    </section>
  );
};

export default Indir;
