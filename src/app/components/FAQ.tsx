"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string; // Sadece Azerice
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations();
  const faqData: FAQItem[] = [
    {
      question: t("what_is_yolu"),
      answer: t("what_is_yolu_desc"),
    },
    {
      question: t("how_apply_jobs"),
      answer: t("how_apply_desc"),
    },
    {
      question: t("how_apply_qr"),
      answer: t("how_apply_qr_desc"),
    },
    {
      question: t("what_is_virtual_card"),
      answer: t("what_is_virtual_card_desc"),
    },
    {
      question: t("what_is_yolu_token"),
      answer: t("what_is_yolu_token_desc"),
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
        {t("faq")}
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
