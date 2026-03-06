import Image from "next/image";

const TRUST_ITEMS = [
  {
    src: "/iaa-logo.png",
    alt: "IAA Regulated",
    title: "IAA",
    subtitle: "Regulated Adviser",
  },
  {
    src: "https://www.nicepng.com/png/full/38-383461_british-council-logo-english-level-british-councel.png",
    alt: "British Council",
    title: "British Council",
    subtitle: "Certified Centre",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UCAS_logo.svg/1280px-UCAS_logo.svg.png",
    alt: "UCAS",
    title: "UCAS",
    subtitle: "Registered Centre",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYI2wP4904kDPoiUlosyfuCFYQB3fRqqU9Q&s",
    alt: "ICEF",
    title: "ICEF",
    subtitle: "Certified Agent",
  },
];

const TrustBarSection = () => {
  return (
    <div className="relative z-10 w-full border-t border-white/20 bg-white/95 backdrop-blur-sm mt-auto">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10 py-4 sm:py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {TRUST_ITEMS.map((item, index) => (
            <div key={item.title} className="contents">
              {index > 0 && (
                <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-200" />
              )}
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBarSection;
