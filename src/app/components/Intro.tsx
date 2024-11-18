"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

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
const Intro = () => {
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
      id="intro"
      className="relative min-h-screen flex items-center bg-cover bg-center w-full md:px-16 lg:px-32 px-2 bg-blue-50"
    >
      {/* İçerik */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 relative z-20">
        {/* Sol Taraf (Yazılar) */}
        <div className="md:w-1/2 text-center md:text-left order-2 mt-0 md:order-1 text-white">
          {/* Başlık */}
          <h1 className=" text-gray-950 mb-2 mt-2 leading-tight font-sans font-bold">
            {t("welcome")}
          </h1>
          {/* Kısa Açıklama */}
          <p className="text-gray-700 mx-auto mb-6 font-sans">
            {t("welcome_desc")}
          </p>
          {/* İndir Butonları */}
          <div className="flex flex-row justify-center items-center md:justify-start gap-2">
            {/* Android Butonu */}
            <a
              href="https://play.google.com/store/apps/details?id=com.yolu.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download for Android"
              className="rounded-xl  w-[160px] h-[50px]  sm:w-[260px] sm:h-[70px] shadow-md bg-no-repeat bg-center bg-cover hover:opacity-90 transition"
              style={{
                backgroundImage: "url('/images/android.png')",
              }}
            ></a>
            {/* iOS Butonu */}
            <a
              onClick={handleIOSClick}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download for iOS"
              className="rounded-xl  w-[160px] h-[50px]  sm:w-[260px] sm:h-[70px] shadow-md bg-no-repeat bg-center bg-cover hover:opacity-90 transition"
              style={{
                backgroundImage: "url('/images/ios.jpg')",
              }}
            ></a>
          </div>
        </div>

        {/* Sağ Taraf (Resim) */}
        <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <img
            src="/images/mockup2.png"
            alt="Illustration"
            className="sm:h-[420px] sm:w-[560px] h-[262px] w-[350px] mt-2"
          />
        </div>
      </div>
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

export default Intro;
