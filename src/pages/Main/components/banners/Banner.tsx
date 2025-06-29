import { useState } from "react";
import * as s from "./banner_styled";
import Button from "@components/Button";

const images = [
  "/images/main/banner1.png",
  "/images/main/banner1.png",
  "/images/main/banner1.png",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;
  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <s.BannerWrapper>
      <s.SlideImage src={images[currentIndex]} alt={`banner-${currentIndex}`} />

      <s.ButtonContainer>
        <Button
          text="자세히 보기"
          img="/icons/arrowUpRight.svg"
          onClick={() => alert("교류협력현황으로 이동 필요")}
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
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </s.Pagination>
    </s.BannerWrapper>
  );
};

export default Banner;
