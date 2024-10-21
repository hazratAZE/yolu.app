const Hakkımızda = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-4"
    >
      <h1 className="font-bold mb-4 text-black">Hakkımızda</h1>
      <p className="text-center mb-8 text-gray-600 w-[80%]">
        Yolu, iş dünyasında inqilab yaradan yenilikçi bir platformdur. Biz, iş
        axtarışı və karyera inkişafı ilə bağlı istifadəçilərimizin bütün
        ehtiyaclarını qarşılayırıq. Yolu ilə yeni fürsətləri kəşf edin,
        kariyeranızı bir addım irəliləyin!
      </p>
      <div className="flex flex-col mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Her bir değer için dışarıdan yüklenen resimler */}
          <div className="flex items-center text-left p-4 bg-gray-100 rounded-lg">
            <img
              src="/icons/bluedot.svg" // Müşteri Memnuniyeti için SVG yolu
              alt="Müştəri Məmnuniyyəti"
              className="w-12 h-12 mr-4"
            />
            <p className="text-black text-lg font-semibold">
              Müştəri Məmnuniyyəti
            </p>
          </div>
          <div className="flex items-center text-left p-4 bg-gray-100 rounded-lg">
            <img
              src="/icons/bluedot.svg" // İnovasyon için SVG yolu
              alt="İnovasiya"
              className="w-12 h-12 mr-4"
            />
            <p className="text-black text-lg font-semibold">İnovasiya</p>
          </div>
          <div className="flex items-center text-left p-4 bg-gray-100 rounded-lg">
            <img
              src="/icons/bluedot.svg" // Etika ve Şeffaflık için SVG yolu
              alt="Etika və Şəffaflıq"
              className="w-12 h-12 mr-4"
            />
            <p className="text-black text-lg font-semibold">
              Etika və Şəffaflıq
            </p>
          </div>
          <div className="flex items-center text-left p-4 bg-gray-100 rounded-lg">
            <img
              src="/icons/bluedot.svg" // Komanda İşbirliği için SVG yolu
              alt="Komanda İşbirliyi"
              className="w-12 h-12 mr-4"
            />
            <p className="text-black text-lg font-semibold">
              Komanda İşbirliyi
            </p>
          </div>
        </div>
      </div>
      {/* Vizyon ve Missiya Bölümü */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">
            Vizyonumuz
          </h2>
          <p className="mx-auto text-gray-800 mb-4">
            İş dünyasında lider olmağı, müştərilərimizin gözləntilərini aşmağı
            və karyera inkişafında inqilab etməyi hədəfləyirik.
          </p>
          <img
            src="/images/mission.jpg" // Vizyon resminin yolu
            alt="Vizyonumuz"
            className="w-full h-80 object-cover mb-2 rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">
            Missiyamız
          </h2>
          <p className="mx-auto text-gray-800 mb-4">
            İstifadəçilərimizə iş tapma, karyera inkişafı və iş elanları vermə
            sahəsində mükəmməl xidmətlər təqdim edərək onlara yeni fürsətlər
            yaratmaq.
          </p>
          <img
            src="/images/worker.jpg" // Missiya resminin yolu
            alt="Missiyamız"
            className="w-full h-80 object-cover mb-2 rounded-lg"
          />
        </div>
      </div>

      {/* İletişim Butonu */}
      <a
        href="#contact"
        className="bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300 px-6 py-3"
      >
        Bizimlə Əlaqə
      </a>
    </section>
  );
};

export default Hakkımızda;
