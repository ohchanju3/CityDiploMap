import { useState } from "react";
import * as s from "./banner_styled";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "/images/main/banner1.png",
    buttonText: "자세히 보기",
    buttonColor: "blue",
    link: "/recommend",
  },
  {
    src: "/images/main/banner2.png",
    buttonText: "자세히 보기",
    buttonColor: "green",
    link: "/citizen",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentBanner = images[currentIndex];
  const total = images.length;
  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
  };
  const navigate = useNavigate();

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

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
