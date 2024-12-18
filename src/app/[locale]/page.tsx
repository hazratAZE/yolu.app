import Header from "../components/Header"; // Header bileşenini içe aktar
import Intro from "../components/Intro"; // Intro bileşenini içe aktar
import Ozellikler from "../components/Ozellikler"; // Özellikler bileşenini içe aktar
import Hakkimizda from "../components/Hakkimizda"; // Hakkımızda bileşenini içe aktar
import Indir from "../components/Indir";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ScrollToTopButton from "../components/ScrollToTopButton";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header /> {/* Header'ı ekle */}
      <main className="flex flex-col items-center justify-center">
        <Intro /> {/* Intro bileşeni */}
        <Hakkimizda /> {/* Hakkımızda bileşeni */}
        <Ozellikler />
        <FAQ /> {/* Özellikler bileşeni */}
        <Indir /> {/* İndir bileşeni */}
        <Footer /> {/* Footer'ı burada ekliyoruz */}
        <ScrollToTopButton />
      </main>
    </div>
  );
}
