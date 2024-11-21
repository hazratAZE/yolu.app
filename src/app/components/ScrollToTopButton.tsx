"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll durumunu takip et
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // 200px'den fazla aşağı inince butonu göster
  };

  // Scroll eventini ekle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // En yukarı kaydırma işlemi
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Yumuşak kaydırma efekti
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="text-lg bg-blue-500"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "12px",
            color: "#000",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            opacity: 0.8,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          <Image
            src="/icons/upicon.svg"
            alt="Yolu Icon"
            width={28}
            height={28}
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
