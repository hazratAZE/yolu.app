import { useTranslations } from "next-intl";
import Image from "next/image";

const Intro = () => {
  const t = useTranslations();
  return (
    <section id="intro" className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto  flex flex-col md:flex-row items-center">
        {/* Mobilde Yukarıda Olacak Görsel */}
        <div className="md:w-1/2 flex justify-end order-1 md:order-2 mb-4 md:mb-0">
          <Image
            src="/icons/workers.svg"
            alt="Uygulama Ekran Görüntüsü"
            width={420}
            height={440}
            className="object-contain w-[300px] h-[220px] md:w-[440px] md:h-[420px]" // Tailwind sınıflarıyla boyutlandırma
          />
        </div>

        {/* Sol Taraf (Yazılar) */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          {/* Başlık */}
          <h1 className="font-bold text-gray-800 mb-4">{t("welcome")}</h1>
          {/* Kısa Açıklama */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t("welcome_desc")}
          </p>
          {/* İndir Butonu */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white rounded-full hover:bg-blue-600 transition flex items-center downloadButton"
            >
              <Image
                src="/icons/download.svg" // İndir simgesi için doğru yol
                alt="İndir"
                width={28} // Simgenin genişliği
                height={28} // Simgenin yüksekliği
                className="mr-2" // Simge ve metin arasında boşluk
              />
              {t("download_now")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
