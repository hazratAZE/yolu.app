"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
const Hakkımızda = () => {
  const t = useTranslations();
  const featuresData = [
    {
      icon: "/images/team.png",
      title: t("team_collaboration"),
      desc: t("team_collaboration_desc"),
      // Çok daha açık kırmızı // Çok daha açık mavi
    },
    {
      icon: "/images/like.jpg",
      title: t("customer_satisfaction"),
      desc: t("customer_satisfaction_desc"), // Çok daha açık kırmızı
      // Çok daha açık mor
    },
    {
      icon: "/images/idea.jpg",
      title: t("innovation"),
      desc: t("innovation_desc"), // Çok daha açık kırmızı
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
          <div className="w-full flex justify-center mt-4 mb-12">
            <div className="relative w-full max-w-4xl  overflow-hidden rounded-3xl shadow-lg">
              <video
                src="./videos/promo.mp4" // Tanıtım videosunun yolu
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Vizyonumuz Açıklaması */}
          {/* Buton */}
          <Link
            href={"#features"}
            className="px-6 py-3 text-black font-sans font-medium border-gray-900 border-2 rounded-full hover:bg-blue-800 hover:text-white hover:border-0 bg-blue-50 shadow-md"
          >
            {t("features")}{" "}
            {/* Burada "learn_more" çevirisini kullanabilirsiniz */}
          </Link>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mt-16">
        {featuresData.map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start bg-blue-100 rounded-3xl p-4 pb-8 shadow-lg"
          >
            <img
              src={_.icon} // Her bir resim için farklı kaynak
              alt={`Feature ${idx + 1}`}
              className="w-24 h-24 mb-4 object-cover rounded-full border-2 shadow-md"
            />
            <h3 className="text-black text-[20px] text-left font-semibold">
              {_.title}
            </h3>
            <p className="text-gray-700 mt-2">{_.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="text-gray-900 font-semibold mt-8">{t("we_working_on")}</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pb-4">
        {/* Vizyon */}
        <div className="flex flex-col items-start text-left bg-blue-100 pb-8 rounded-3xl shadow-lg">
          <img
            src="/images/screen.png"
            alt="Vizyon"
            className="w-full h-64 mb-6 object-cover rounded-t-3xl"
          />
          <h2 className="font-semibold text-gray-950 mb-2 px-4">
            {t("our_vision")}
          </h2>
          <p className="text-gray-700 px-4">{t("vision_desc")}</p>
        </div>

        {/* Misyon */}
        <div className="flex flex-col items-start text-left bg-blue-100 pb-4 rounded-3xl shadow-lg">
          <img
            src="/images/mission.jpg"
            alt="Misyon"
            className="w-full h-64 mb-6 object-cover rounded-t-3xl"
          />
          <h2 className="font-semibold text-gray-950 mb-2 px-4">
            {t("mission")}
          </h2>
          <p className="text-gray-700 px-4">{t("mission_desc")}</p>
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
