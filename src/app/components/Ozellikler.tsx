import { useTranslations } from "next-intl";
import Image from "next/image";

const Ozellikler = () => {
  const t = useTranslations();
  const featuresData = [
    {
      icon: "/icons/map.svg",
      text: t("map_feature_desc"),
    },
    {
      icon: "/icons/qr.svg",
      text: t("qr_apply_feature_desc"),
    },
    {
      icon: "/icons/card.svg",
      text: t("virtual_card_feature_desc"),
    },
    {
      icon: "/icons/token.svg",
      text: t("token_feature_desc"),
    },
    {
      icon: "/icons/earn.svg",
      text: t("earn_token_feature_desc"),
    },
    {
      icon: "/icons/partner.svg",
      text: t("partner_feature_desc"),
    },
  ];

  return (
    <section
      id="features"
      className="bg-gray-100 min-h-screen flex flex-col justify-center pt-16 px-4"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-center text-black font-bold">{t("features")}</h1>
        <div className="text-center justify-center flex mt-4">
          <p className="text-gray-600 mb-8 w-[80%]">
            {t("unique_features_desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-6 rounded-lg"
            >
              <div className="mr-6 shrink-0">
                {" "}
                {/* İkonun küçülmesini engelleyen sınıf */}
                <Image
                  src={feature.icon}
                  alt={`Feature ${index + 1}`}
                  width={46} // İkon boyutunu artırdık ve sabitledik
                  height={46}
                  className="object-contain"
                />
              </div>
              <div className="text-gray-600 font-light text-sm">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
        {/* Daha fazla özellikler için metin */}
      </div>
    </section>
  );
};

export default Ozellikler;
