import Image from "next/image";

const Intro = () => {
  return (
    <section
      id="intro"
      className="bg-gray-100 min-h-screen flex items-center" // Dikey ortalama için "flex" ve "items-center" eklendi
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Sol Taraf (Yazılar) */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          {/* Başlık */}
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Yolu ile Kariyerinizde Hızla İlerleyin
          </h1>
          {/* Kısa Açıklama */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Yolu, iş arama ve kariyer geliştirme konusunda yenilikçi çözümler
            sunar. Yolu ile iş bulmak, iş ilanı vermek ve kariyerinizde yeni
            fırsatlar keşfetmek daha kolay.
          </p>
          {/* İndir Butonu */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.yolu.app" // Buraya yönlendirmek istediğiniz URL'yi ekleyin
              target="_blank" // Yeni sekmede açılması için
              rel="noopener noreferrer" // Güvenlik önlemi
              className="bg-blue-500 text-white rounded-full px-20 py-5 font-semibold text-xl hover:bg-blue-600 transition"
            >
              İndir
            </a>
          </div>
        </div>

        {/* Sağ Taraf (Görsel) */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/icons/workers.svg" // Uygulama ekran görüntüsü burada olacak
            alt="Uygulama Ekran Görüntüsü"
            width={360}
            height={360}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
