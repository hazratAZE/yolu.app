"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
const Hakkımızda = () => {
  const t = useTranslations();
  const featuresData = [
    {
      icon: "https://media.istockphoto.com/id/1404301067/photo/3d-cartoon-two-hands-giving-a-high-five-teamwork-concept-character-hand-emoji-business.jpg?s=612x612&w=0&k=20&c=SwDl0ayzvNRyFGA-aJspD3xiX1dS4gnHqWCH2276YcY=",
      title: t("team_collaboration"), // Çok daha açık kırmızı // Çok daha açık mavi
    },
    {
      icon: "https://img.freepik.com/premium-photo/3d-render-customer-hand-thumb-up-like-gesture-isolated-blue-background-positive-feedback_422666-3504.jpg",
      title: t("customer_satisfaction"), // Çok daha açık kırmızı
      // Çok daha açık mor
    },
    {
      icon: "https://img.freepik.com/free-psd/3d-team-work-concept-background_23-2151527886.jpg",
      title: t("innovation"), // Çok daha açık kırmızı
    },
  ];
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center min-h-screen bg-blue-50 md:px-16 lg:px-32 px-4 pt-16 font-sans"
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
            src="/images/mockup4.png" // Sol taraf resim için kaynak
            alt="Hakkımızda"
            className="sm:h-[540px] sm:w-[360px] lg:h-[600px] lg:w-[400px] h-[300px] w-[200px]"
          />
        </div>

        {/* Sağ taraf - Metin */}
        <div className="md:w-1/2 text-center md:text-left md:order-2 order-1">
          <h2 className="font-semibold text-gray-800 mb-4">
            <span className="text-blue-700">Yolu</span>-{t("yolu_desc")}
          </h2>
          <p className="text-gray-800 mb-10">{t("yolu_startup_desc")}</p>{" "}
          {/* Vizyonumuz Açıklaması */}
          {/* Buton */}
          <Link
            href={"#features"}
            className="px-6 py-3 text-black font-sans font-medium border-gray-900 border-2 rounded-full hover:bg-blue-800 hover:text-white hover:border-0 bg-blue-50"
          >
            {t("features")}{" "}
            {/* Burada "learn_more" çevirisini kullanabilirsiniz */}
          </Link>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4 mt-16">
        {featuresData.map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start bg-blue-100 rounded-sm p-4"
          >
            <img
              src={_.icon} // Her bir resim için farklı kaynak
              alt={`Feature ${idx + 1}`}
              className="w-full h-full mb-4 rounded-sm object-cover"
            />
            <h3 className="text-black text-[20px] text-left mt-2 font-semibold">
              {_.title}
            </h3>
          </div>
        ))}
      </div>
      <h2 className="text-gray-900 font-semibold mt-8">{t("we_working_on")}</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-8">
        {/* Vizyon */}
        <div className="flex flex-col items-start text-left bg-gray-900 p-4 rounded-sm">
          <img
            src="/images/screen.png"
            alt="Vizyon"
            className="w-full h-64 mb-6 object-cover"
          />
          <h2 className="font-semibold text-gray-50 mb-4">{t("our_vision")}</h2>
          <p className="text-gray-300">{t("vision_desc")}</p>
        </div>

        {/* Misyon */}
        <div className="flex flex-col items-start text-left bg-gray-900 p-4 py-8 rounded-sm">
          <img
            src="/images/mission.jpg"
            alt="Misyon"
            className="w-full h-64 mb-6 object-cover"
          />
          <h2 className="font-semibold text-gray-50 mb-4">{t("mission")}</h2>
          <p className="text-gray-300">{t("mission_desc")}</p>
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
