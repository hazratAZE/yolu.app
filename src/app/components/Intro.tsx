"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface CustomAlertProps {
  message: string;
  onClose: () => void;
  buttonText?: string; // Dışarıdan gelecek buton metni için opsiyonel prop
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  onClose,
  buttonText = "Bağla",
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-3xl p-6 shadow-lg md:w-[30%] sm:w-[90%]">
        <h3 className="text-black text-sm font-light text-center">{message}</h3>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-6 py-2 rounded-full"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Intro = () => {
  const t = useTranslations();
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleIOSClick = () => {
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const users = [
    "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAUPUG0r--EDZzf-f9Afj_Jp7N96yIGsWPgCYIkrAS1rCJHIcdm_RCq_me44bJc0dvvY&usqp=CAU",
  ];

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center bg-cover bg-center w-full md:px-16 lg:px-32 px-2 bg-blue-50"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 relative z-20">
        <div className="md:w-1/2 text-center md:text-left order-2 mt-0 md:order-1 text-white z-20">
          <h1 className="text-gray-900 mb-2 mt-2 leading-tight font-sans font-bold">
            <span className="text-blue-700">Yolu</span>-{t("welcome")}
          </h1>
          <p className="text-gray-800 mx-auto mb-6 font-sans">
            {t("welcome_desc")}
          </p>
          <div className="flex flex-row justify-center items-center md:justify-start gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.yolu.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download for Android"
              className="rounded-xl w-[160px] h-[50px] sm:w-[280px] sm:h-[80px] shadow-md bg-no-repeat bg-center bg-cover hover:opacity-90 transition"
              style={{
                backgroundImage: "url('/images/android.png')",
              }}
            ></a>
            <a
              onClick={handleIOSClick}
              className="rounded-xl w-[160px] h-[50px] sm:w-[280px] sm:h-[80px] shadow-md bg-no-repeat bg-center bg-cover hover:opacity-90 transition"
              style={{
                backgroundImage: "url('/images/ios.jpg')",
              }}
            ></a>
          </div>

          {/* Kullanıcılar ve "+100" */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center mt-10 sm:space-x-2 space-y-4 sm:space-y-0">
            <div className="flex sm:flex-row items-center justify-center space-x-[-16px] sm:space-x-[-16px]">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="sm:w-12 sm:h-12 w-10 h-10 bg-gray-200 rounded-full overflow-hidden border-2 border-blue-50"
                  style={{
                    marginLeft: index !== 0 ? "-16px" : "0", // İlk öğe için soldan kayma yok
                  }}
                >
                  <img
                    src={user}
                    alt={`user${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div
                className="sm:w-12 sm:h-12 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-medium text-sm border-2 border-blue-50"
                style={{
                  marginLeft: "-16px",
                }}
              >
                +10
              </div>
            </div>
            <span className="text-gray-800 text-sm font-sans font-normal sm:text-base text-center">
              +50 {t("users_download_app")}
            </span>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2 z-10">
          <img
            src="/images/mockup3.png"
            alt="Illustration"
            className="sm:h-[420px] sm:w-[560px] lg:h-[462px] lg:w-[616px] h-[262px] w-[350px]"
          />
        </div>
      </div>

      {isAlertVisible && (
        <CustomAlert
          message={t("ios_warn")}
          buttonText={t("close")}
          onClose={closeAlert}
        />
      )}
    </section>
  );
};

export default Intro;
