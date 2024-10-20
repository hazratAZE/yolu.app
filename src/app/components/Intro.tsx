import Image from "next/image";

const Intro = () => {
  return (
    <section id="intro" className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Mobilde Yukarıda Olacak Görsel */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/icons/workers.svg"
            alt="Uygulama Ekran Görüntüsü"
            width={400}
            height={400}
            className="object-contain w-[200px] h-[200px] md:w-[400px] md:h-[400px]" // Tailwind sınıflarıyla boyutlandırma
          />
        </div>

        {/* Sol Taraf (Yazılar) */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          {/* Başlık */}
          <h1 className="font-bold text-gray-800 mb-6">
            Yolu ilə Karyeranızda Sürətlə İrələyin
          </h1>
          {/* Kısa Açıklama */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Yolu, iş axtarışı və karyera inkişafı ilə bağlı yenilikçi həllər
            təqdim edir. Yolu ilə iş tapmaq, iş elanları vermək və karyeranızda
            yeni fürsətlər kəşf etmək daha asandır.
          </p>
          {/* İndir Butonu */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition downloadButton"
            >
              İndi yüklə
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
