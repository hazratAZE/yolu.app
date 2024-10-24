"use client";

import { useTranslations } from "next-intl";

const Hakkımızda = () => {
  const t = useTranslations();
  const scrollToContact = () => {
    // Sayfanın en altına kaydırmak için window.scrollTo kullanabilirsiniz
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center pt-16 px-4"
    >
      <h1 className="font-bold mb-4 text-black">{t("about")}</h1>
      <p className="text-center mb-16 text-gray-600 md:w-[80%]">
        {t("about_desc")}
      </p>
      <div className="flex flex-col mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Her bir değer için dışarıdan yüklenen resimler */}
          <div className="flex items-center text-left p-4 bg-gray-100 rounded-lg">
            <img
              src="/icons/bluedot.svg" // Müşteri Memnuniyeti için SVG yolu
              alt="Müştəri Məmnuniyyəti"
              className="w-12 h-12 mr-4"
            />
            <p className="text-black text-lg font-semibold">
              {" "}
              {t("customer_satisfaction")}
            </p>
          </div>
          <div className="flex items-center text-left p-4 bg-gray-100 rounded-lg">
            <img
              src="/icons/bluedot.svg" // İnovasyon için SVG yolu
              alt="İnovasiya"
              className="w-12 h-12 mr-4"
            />
            <p className="text-black text-lg font-semibold">
              {t("innovation")}
            </p>
          </div>
          <div className="flex items-center text-left p-4 bg-gray-100 rounded-lg">
            <img
              src="/icons/bluedot.svg" // Etika ve Şeffaflık için SVG yolu
              alt="Etika və Şəffaflıq"
              className="w-12 h-12 mr-4"
            />
            <p className="text-black text-lg font-semibold">
              {t("ethics_transparency")}
            </p>
          </div>
          <div className="flex items-center text-left p-4 bg-gray-100 rounded-lg">
            <img
              src="/icons/bluedot.svg" // Komanda İşbirliği için SVG yolu
              alt="Komanda İşbirliyi"
              className="w-12 h-12 mr-4"
            />
            <p className="text-black text-lg font-semibold">
              {t("team_collaboration")}
            </p>
          </div>
        </div>
      </div>
      {/* Vizyon ve Missiya Bölümü */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 p-2">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">
            {t("our_vision")}
          </h2>
          <p className="mx-auto text-gray-800 mb-4">{t("vision_desc")}</p>
          <img
            src="/images/mission.jpg" // Vizyon resminin yolu
            alt="Vizyonumuz"
            className="w-full h-80 object-cover mb-2 rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-2">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">
            {t("mission")}
          </h2>
          <p className="mx-auto text-gray-800 mb-4">{t("mission_desc")}</p>
          <img
            src="/images/worker.jpg" // Missiya resminin yolu
            alt="Missiyamız"
            className="w-full h-80 object-cover mb-2 rounded-lg"
          />
        </div>
      </div>

      {/* İletişim Butonu */}
      <button
        onClick={scrollToContact}
        className="bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300 px-8 py-4"
      >
        {t("contact_us")}
      </button>
    </section>
  );
};

export default Hakkımızda;
