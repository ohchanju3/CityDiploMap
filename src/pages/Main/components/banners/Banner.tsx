import Button from "@components/Button";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerWrapper>
      <img src="/images/main/banner1.png" />
      <ButtonContainer>
        <Button
          text="자세히 보기"
          img="/icons/arrowUpRight.svg"
          //TODO: 이동 변경하기
          onClick={() => alert("교류협력현황으로 이동 필요")}
        />
      </ButtonContainer>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 23%;
  left: 20%;
  transform: translate(-50%, 0);
  z-index: 2;
`;

export default Banner;
