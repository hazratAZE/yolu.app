import { useTranslations } from "next-intl";
import Image from "next/image";

const Ozellikler = () => {
  const t = useTranslations();

  const featuresData = [
    {
      icon: "/icons/map.svg",
      title: t("map_feature_title"),
      text: t("map_feature_desc"),
      color: "darkred",
      lightColor: "#ffeaea", // Çok daha açık kırmızı
    },
    {
      icon: "/icons/qr.svg",
      title: t("qr_apply_feature_title"),
      text: t("qr_apply_feature_desc"),
      color: "darkorange",
      lightColor: "#fff4e5", // Çok daha açık turuncu
    },
    {
      icon: "/icons/card.svg",
      title: t("virtual_card_feature_title"),
      text: t("virtual_card_feature_desc"),
      color: "darkblue",
      lightColor: "#eaf3ff", // Çok daha açık mavi
    },
    {
      icon: "/icons/token.svg",
      title: t("token_feature_title"),
      text: t("token_feature_desc"),
      color: "purple",
      lightColor: "#f6eafc", // Çok daha açık mor
    },
    {
      icon: "/icons/earn.svg",
      title: t("earn_token_feature_title"),
      text: t("earn_token_feature_desc"),
      color: "darkgreen",
      lightColor: "#eaf8ea", // Çok daha açık yeşil
    },
    {
      icon: "/icons/partner.svg",
      title: t("partner_feature_title"),
      text: t("partner_feature_desc"),
      color: "steelblue",
      lightColor: "#e7f3fb", // Çok daha açık çelik mavi
    },
  ];

  return (
    <section
      id="features"
      className="min-h-screen flex flex-col items-center bg-blue-50 px-4 md:px-16 lg:px-32 pt-16 font-sans"
    >
      {/* Başlık */}
      <h1 className="text-black font-bold text-center mb-2 md:mb-8">
        {t("features")}
      </h1>

      <div className="flex flex-col md:flex-row md:items-center w-full gap-12">
        {/* Sol taraf: Özellikler */}
        <div className="flex flex-col flex-1 order-2 md:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-center  pl-6 p-6 rounded-3xl bg-blue-100 opacity-90 shadow-md"
              >
                <div
                  className="mb-4 rounded-full p-3 text-2xl font-bold text-black border-2 shadow-md"
                  style={{ backgroundColor: feature.color }}
                >
                  <Image
                    src={feature.icon}
                    alt={"image"}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-gray-900 font-sans font-medium mb-1 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-tight">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Sağ taraf: Görsel */}
        <div className="flex flex-col items-center justify-center flex-1 order-1 md:order-2">
          <h2 className="text-gray-900 font-sans font-semibold order-2 md:order-1 text-left">
            {t("key_features")}
          </h2>
          <img
            src="/images/mockup5.png"
            alt="Hakkımızda"
            className="sm:h-[540px] sm:w-[360px] lg:h-[600px] lg:w-[400px] h-[300px] w-[200px] order-1 md:order-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Ozellikler;
