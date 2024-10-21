import Image from "next/image";

const Intro = () => {
  return (
    <section id="intro" className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Mobilde Yukarıda Olacak Görsel */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-2 md:mb-0">
          <Image
            src="/icons/workers.svg"
            alt="Uygulama Ekran Görüntüsü"
            width={420}
            height={420}
            className="object-contain w-[260px] h-[220px] md:w-[440px] md:h-[420px]" // Tailwind sınıflarıyla boyutlandırma
          />
        </div>

        {/* Sol Taraf (Yazılar) */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          {/* Başlık */}
          <h1 className="font-bold text-gray-800 mb-4">
            Yolu’ya Xoş Gəldiniz!
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
              className="bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition flex items-center downloadButton"
            >
              <Image
                src="/icons/download.svg" // İndir simgesi için doğru yol
                alt="İndir"
                width={28} // Simgenin genişliği
                height={28} // Simgenin yüksekliği
                className="mr-2" // Simge ve metin arasında boşluk
              />
              İndi yüklə
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
