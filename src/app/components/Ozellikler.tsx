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
    },
    {
      icon: "/icons/qr.svg",
      title: t("qr_apply_feature_title"),
      text: t("qr_apply_feature_desc"),
      color: "darkorange",
    },
    {
      icon: "/icons/card.svg",
      title: t("virtual_card_feature_title"),
      text: t("virtual_card_feature_desc"),
      color: "darkblue",
    },
    {
      icon: "/icons/token.svg",
      title: t("token_feature_title"),
      text: t("token_feature_desc"),
      color: "purple",
    },
    {
      icon: "/icons/earn.svg",
      title: t("earn_token_feature_title"),
      text: t("earn_token_feature_desc"),
      color: "darkgreen",
    },
    {
      icon: "/icons/partner.svg",
      title: t("partner_feature_title"),
      text: t("partner_feature_desc"),
      color: "steelblue",
    },
  ];

  return (
    <section
      id="features"
      className="min-h-screen flex flex-col items-center bg-blue-50 px-4 md:px-16 lg:px-32 pt-16 font-sans"
    >
      {/* Başlık */}
      <h1 className="text-black font-bold text-center mb-2">{t("features")}</h1>

      <div className="flex flex-col md:flex-row md:items-center w-full gap-4">
        {/* Sol taraf: Özellikler */}
        <div className="flex flex-col flex-1 order-2 md:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start text-left border-l-4 border-blue-100 pl-6 p-4 bg-blue-50"
              >
                <div
                  className="mb-4 rounded-full p-4 text-2xl font-bold text-black"
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
                <h3 className="text-gray-900 font-sans font-bold mb-1 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-tight">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Sağ taraf: Görsel */}
        <div className="flex flex-col items-center justify-center flex-1 order-1 md:order-2">
          <h2 className="text-gray-900 font-sans font-bold mb-1 order-2 md:order-1 text-center">
            <span className="text-blue-800">Yolu</span> - {t("key_features")}
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
