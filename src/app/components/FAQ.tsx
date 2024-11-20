"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string; // Sadece Azerice
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Yolu nədir və necə işləyir?",
      answer:
        "Yolu, iş elanlarına müraciət edə biləcəyiniz və işəgötürənlərlə əlaqə qura biləcəyiniz mobil tətbiqdir.",
    },
    {
      question: "Yolu-da QR ilə müraciət necə edilir?",
      answer:
        "İş elanı QR kodunu skan edərək sürətli şəkildə müraciət edə bilərsiniz.",
    },
    {
      question: "Virtual kart necə istifadə olunur?",
      answer:
        "Yolu Virtual Kartı qazandığınız tokenləri saxlamaq və xərcləmək üçün istifadə olunur.",
    },
    {
      question: "Token necə qazanılır?",
      answer:
        "Partnyor şirkətlərimizdən alış-veriş edərək token qazana bilərsiniz.",
    },
    {
      question: "Tətbiqi haradan yükləyə bilərəm?",
      answer:
        "Tətbiqimizi App Store və ya Google Play Store-dan yükləyə bilərsiniz.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="faq-section w-full min-h-screen bg-blue-50 font-sans flex flex-col items-center px-4 md:px-16 lg:px-32 pt-16"
    >
      {/* Başlık: Sayfanın en üstünde ortada */}
      <h1 className="text-center font-bold text-gray-950 mt-16 mb-8">
        Tez-tez Verilən Suallar
      </h1>

      {/* FAQ ve Resim Kısmı: Flex düzeni içinde */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between">
        {/* Sağ Kısım: Resim */}
        <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
          <img
            src="/images/mockup6.png"
            alt="Hakkımızda"
            className="sm:h-[540px] sm:w-[360px] lg:h-[600px] lg:w-[400px] h-[300px] w-[200px] order-1 md:order-2"
          />
        </div>

        {/* Sol Kısım: FAQ */}
        <div className="lg:w-1/2 w-full lg:text-left mb-8 lg:mb-0">
          <div className="w-full max-w-3xl mx-auto lg:mx-0">
            {faqData.map((item, index) => (
              <div key={index} className="mb-2 opacity-90">
                <button
                  className="w-full text-left flex justify-between items-center py-4 px-4 transition hover:bg-blue-100 rounded-sm"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg text-black font-semibold">
                    {item.question}
                  </span>
                  <span className="text-2xl font-normal text-black">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="p-4 bg-blue-50 text-gray-800">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
