import { useEffect, useState, useMemo } from "react";
import * as s from "./banner_styled";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

const baseImages = [
  {
    filename: "banner1",
    buttonText: "자세히 보기",
    buttonColor: "blue",
    link: "/cooperation",
  },
  {
    filename: "banner2",
    buttonText: "자세히 보기",
    buttonColor: "green",
    link: "/recommend",
  },
  {
    filename: "banner3",
    buttonText: "자세히 보기",
    buttonColor: "blue",
    link: "/citizen",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language, setLanguage] = useState<"ko" | "en">("ko"); // ✅ state로 관리
  const navigate = useNavigate();

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage") as "ko" | "en";
    setLanguage(storedLang || "ko");

    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem("selectedLanguage") as
        | "ko"
        | "en";
      setLanguage(updatedLang || "ko");
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    window.addEventListener("storage", handleLanguageChange);

    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
      window.removeEventListener("storage", handleLanguageChange);
    };
  }, []);

  const images = useMemo(
    () =>
      baseImages.map((item) => ({
        ...item,
        src: `/images/main/${item.filename}${
          language === "en" ? "_en" : ""
        }.png`,
      })),
    [language]
  );

  const total = images.length;
  const currentBanner = images[currentIndex];

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <s.BannerWrapper>
      <s.SlideImage src={currentBanner.src} alt={`banner-${currentIndex}`} />

      <s.ButtonContainer>
        <Button
          text={currentBanner.buttonText}
          img="/icons/arrowUpRight.svg"
          onClick={() => navigate(currentBanner.link)}
          bgColor={currentBanner.buttonColor}
        />
      </s.ButtonContainer>

      <s.Arrow direction="left" onClick={handlePrev}>
        <img src="/icons/arrowLeft.svg" />
      </s.Arrow>
      <s.Arrow direction="right" onClick={handleNext}>
        <img src="/icons/arrowRight.svg" />
      </s.Arrow>

      <s.Pagination>
        {images.map((_, idx) => (
          <s.Dot
            key={idx}
            $active={idx === currentIndex}
            $color={currentBanner.buttonColor}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </s.Pagination>
    </s.BannerWrapper>
  );
};

export default Banner;
