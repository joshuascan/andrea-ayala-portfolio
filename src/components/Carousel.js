import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/future/image";
import { fineArt } from "../constants";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const StyledSwiper = styled(Swiper)`
  margin: 2rem auto 0;
  display: flex;
  max-width: 90rem;
  width: 90%;
`;

const Img = styled(Image)`
  margin: 0 auto;
  height: 85rem;
  width: auto;
`;

const TextContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 80px;
  padding: 1rem;
`;

const TitleText = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 2rem;
`;

const DescriptionText = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 1.4rem;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Carousel() {
  return (
    <StyledSwiper
      cssMode={true}
      navigation={true}
      rewind={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {fineArt.map(({ title, description, image, id }) => (
        <SwiperSlide key={id}>
          <SlideContainer>
            <Img src={image} alt={title} />
            <TextContainer>
              <TitleText>{title}</TitleText>
              <DescriptionText>{description}</DescriptionText>
            </TextContainer>
          </SlideContainer>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}
