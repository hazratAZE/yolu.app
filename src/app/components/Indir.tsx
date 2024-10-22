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
      <div className="bg-white rounded-3xl p-6 shadow-lg md:w-[30%] sm:w-[90%]">
        <h2 className="text-black text-md font-light text-center">{message}</h2>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-6 py-2 rounded-full"
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
      className="min-h-screen flex flex-col items-center justify-center pt-16"
    >
      <h1 className="text-black font-bold mb-4">Yüklə</h1>

      {/* Flexbox kullanarak resim ve metin düzeni */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-screen-lg">
        {/* Paragraf Sol Taraf */}
        <div className="md:w-1/2 flex items-center bg-white p-6 md:h-[400px] overflow-hidden">
          <p className="text-gray-800 text-sm font-md text-left mb-0 py-1">
            Uygulamamızın üstün xüsusiyyətlərini kəşf edin! İstədiyiniz zaman,
            istədiyiniz yerdə sərfəli təkliflərdən yararlanmaq üçün dərhal
            yükləyin. Sizin üçün yaradılmış mükəmməl bir tətbiq ilə bütün
            imkanlardan faydalanın. Bu tətbiq, gündəlik həyatınızı
            asanlaşdıracaq bir çox xüsusiyyət təqdim edir. Uygulamamızın ən
            diqqət çəkən xüsusiyyətlərindən biri, istifadəçilərə xüsusi
            təkliflər və endirimlər təqdim etməsidir. Tətbiq vasitəsilə, özünüzə
            uyğun olan təklifləri rahatlıqla kəşf edə və gündəlik xərclərinizi
            minimuma endirə bilərsiniz. Sizi maraqlandıran sektorlarda, xüsusilə
            alış-veriş, xidmətlər və əyləncə sahələrində, bir çox imkanla
            qarşılacaqsınız. Eyni zamanda, intuitiv dizaynı ilə tətbiqimiz,
            istifadəçilərə rahat bir təcrübə təmin edir. Hər yaşda insanın
            rahatlıqla istifadə edə biləcəyi bir arayüzə sahibdir. İstədiyiniz
            zaman, istədiyiniz yerdə sərfəli təkliflərdən yararlanmaq üçün
            tətbiqi yükləmək sizə yalnız alış-verişdə deyil, həm də həyat
            tərzinizdə yeni bir dönüş yaratma imkanı verəcək.
          </p>
        </div>
        {/* Resim Sağ Taraf */}
        <div className="md:w-1/2 flex items-center">
          <img
            src="/images/screen.png" // Resmin yolu (kendi resminizi buraya koyun)
            alt="Uygulama İndirme"
            className="w-full h-[400px] object-cover" // Resim boyutunu ayarlayın
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-lg mt-24">
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
          message="Tətbiqimiz iOS platformasında hələlik mövcud deyil. Lakin, iOS istifadəçiləri üçün mükəmməl bir təcrübə yaratmaq üzərində çalışırıq. Dikkatiniz üçün təşəkkür edirik, yaxın zamanda iOS-da da bizimlə olacaqsınız!"
          onClose={closeAlert}
        />
      )}
    </section>
  );
};

export default Indir;
