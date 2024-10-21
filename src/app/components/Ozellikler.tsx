import Image from "next/image";

const Ozellikler = () => {
  const featuresData = [
    {
      icon: "/icons/map.svg",
      text: "Xəritə üzərində görsənmək imkanı ilə həm iş elanlarını, həm də digər istifadəçiləri asanlıqla tapın. Beləliklə, iş tapmaq və ya iş elanınızı ön plana çıxarmaq çox daha sürətli və effektiv olacaq. Bu xüsusiyyət sizə zaman qazandıraraq işlərinizin daha asan həll olunmasına kömək edəcək.",
    },
    {
      icon: "/icons/qr.svg",
      text: "QR apply xüsusiyyəti ilə işlərə tez və rahat şəkildə müraciət edin. CV hazırlamaqla vaxt itirmədən sadəcə QR kodu ilə müraciət etmə imkanı əldə edərək iş tapma prosesinizi sürətləndirin. Müraciətlərinizi sürətli və problemsiz şəkildə yönləndirmək üçün bu funksiyadan faydalanın.",
    },
    {
      icon: "/icons/card.svg",
      text: "Yolu virtual kartı ilə token hesabınızı asanlıqla idarə edin. Virtual kart əldə edərək, Yolu platformasının bütün funksiyalarından yararlanın. Bu kart vasitəsilə ödəmələrdən tutmuş müxtəlif əməliyyatlara qədər çoxsaylı imkanlardan istifadə edin.",
    },
    {
      icon: "/icons/token.svg",
      text: "Yolu tətbiqi daxilində istifadə olunan token ilə bütün əməliyyatlarda rahatlıqla istifadə edə biləcəyiniz bir tokenə sahib olun. İş müraciətləri, ödənişlər və digər əməliyyatlarda bu tokenin funksionallığı ilə işlərinizi sürətləndirin.",
    },
    {
      icon: "/icons/earn.svg",
      text: "Sizə məxsus tokenləri istənilən vaxt sataraq real pula çevirmək imkanı. Tokenlərinizin dəyərini artırmaq və onları pul ekvivalentinə çevirmək üçün sadə və rahat bir yol təklif edirik. Bu yolla qazancınızı artırmaq üçün bu funksiyanı kəşf edin.",
    },
    {
      icon: "/icons/partner.svg",
      text: "Bizimlə tərəfdaş olaraq satışlarınızı artırın və daha çox qazanın. Partnyorlarımızla əməkdaşlıq edərək iş imkanlarınızı genişləndirin və yeni müştərilərə çataraq gəlirinizi artırın. Bu əməkdaşlıq sayəsində siz də qazanc əldə edə bilərsiniz.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-gray-100 min-h-screen flex flex-col justify-center py-12"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-center text-black font-bold">Əsas Xüsusiyyətlər</h1>
        <div className="text-center justify-center flex mt-4">
          <p className="text-gray-600 mb-8 w-[80%]">
            Yolu platformasının təqdim etdiyi daha çox unikal xüsusiyyətlərdən
            faydalanmaq və iş dünyasında rəqiblərinizdən bir addım öndə olmaq
            üçün bizə qoşulun!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mr-6 shrink-0">
                {" "}
                {/* İkonun küçülmesini engelleyen sınıf */}
                <Image
                  src={feature.icon}
                  alt={`Feature ${index + 1}`}
                  width={46} // İkon boyutunu artırdık ve sabitledik
                  height={46}
                  className="object-contain"
                />
              </div>
              <div className="text-gray-600 font-light text-sm">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
        {/* Daha fazla özellikler için metin */}
      </div>
    </section>
  );
};

export default Ozellikler;
