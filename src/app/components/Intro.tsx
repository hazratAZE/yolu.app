import { useTranslations } from "next-intl";

const Intro = () => {
  const t = useTranslations();
  return (
    <section
      id="intro"
      className="relative bg-gray-100 min-h-screen flex items-center bg-cover bg-center w-full px-8"
      style={{ backgroundImage: "url('/images/phone.jpg')" }} // Arka plan resmi
    >
      {/* Siyah Opak Katman */}
      <div className="absolute inset-0 bg-black opacity-55 z-10"></div>

      {/* İçerik */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 relative z-20">
        {/* Sol Taraf (Yazılar) */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 text-white">
          {/* Başlık */}
          <h1 className="font-bold text-white mb-4">{t("welcome")}</h1>
          {/* Kısa Açıklama */}
          <p className="text-white mx-auto mb-8">{t("welcome_desc")}</p>
          {/* İndir Butonu */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition flex items-center downloadButton shadow-md"
            >
              {t("download_now")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
