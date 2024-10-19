import Header from "./components/Header"; // Header bileşenini içe aktar

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header /> {/* Header'ı ekle */}
      <main className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Hoşgeldiniz!</h1>
        <p className="text-lg text-center mb-8">
          Bu, tek sayfa bir bilgi sitesi örneğidir. Bilgileri görmek için
          aşağıdaki bağlantılara göz atabilirsiniz.
        </p>
        <div className="flex flex-col gap-4">
          <a
            className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition"
            href="#section1"
          >
            Bölüm 1
          </a>
          <a
            className="bg-green-500 text-white rounded-full px-6 py-2 hover:bg-green-600 transition"
            href="#section2"
          >
            Bölüm 2
          </a>
          <a
            className="bg-red-500 text-white rounded-full px-6 py-2 hover:bg-red-600 transition"
            href="#section3"
          >
            Bölüm 3
          </a>
        </div>

        {/* İçerik Bölümleri */}
        <section id="section1" className="mt-20 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold">Bölüm 1</h2>
          <p>Bu bölüm hakkında bilgi.</p>
        </section>
        <section id="section2" className="mt-20 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold">Bölüm 2</h2>
          <p>Bu bölüm hakkında daha fazla bilgi.</p>
        </section>
        <section id="section3" className="mt-20 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold">Bölüm 3</h2>
          <p>Bu bölümün içeriği burada yer alacak.</p>
        </section>
      </main>
    </div>
  );
}
