import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/future/image";
import { fineArt } from "../constants";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const StyledSwiper = styled(Swiper)`
  margin-top: 2rem;
  display: flex;
  max-width: 90rem;
  width: 90%;
  --swiper-navigation-color: rgba(0, 0, 0, 0.15);
  --swiper-pagination-color: rgba(0, 0, 0, 0.6);

  :hover {
    .swiper-button-prev,
    .swiper-button-next {
      transition: color 0.3s ease-in-out;

      :hover {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 50rem;
    width: 100%;
  }
`;

const Img = styled(Image)`
  margin: 0 auto;
  height: 85rem;
  width: auto;

  @media ${({ theme }) => theme.breakpoints.lg} {
    height: 70rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 60rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 95%;
    max-width: 43rem;
    height: auto;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 1rem;
  bottom: 0px;
  margin-bottom: 1.4rem;
`;

const TitleText = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

const DescriptionText = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 1.4rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 70vh;
  }
`;

export default function Carousel() {
  return (
    <StyledSwiper
      cssMode={true}
      navigation={true}
      rewind={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
