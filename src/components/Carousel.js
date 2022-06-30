import styled, { css } from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/future/image";
import { fineArt } from "../constants";

const CarouselWrapper = styled(CarouselProvider)`
  margin: 2rem auto 0;
  display: flex;
  width: 90rem;
`;

const StyledSlider = styled(Slider)`
  height: 900px;
  width: 900px;
  margin: 0 auto;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled(Image)`
  margin: 0 auto;
`;

const TextContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  top: 800px;
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

const buttonStyles = css`
  font-size: 8rem;
  color: black;
  opacity: 0.15;
  background: none;
  transition: opacity 0.3s ease-in-out;

  :hover {
    opacity: 0.4;
  }
`;

const BackButton = styled(ButtonBack)`
  ${buttonStyles}
  }
`;

const NextButton = styled(ButtonNext)`
  ${buttonStyles}
  }
`;

export default function Carousel() {
  return (
    <CarouselWrapper
      naturalSlideWidth={900}
      naturalSlideHeight={900}
      totalSlides={fineArt.length}
    >
      <BackButton>&#10094;</BackButton>
      <StyledSlider>
        {fineArt.map(({ title, description, image, id }) => (
          <Slide index={id} key={id}>
            <SlideContainer>
              <Img src={image} alt={title} height={850} />
              <TextContainer>
                <TitleText>{title}</TitleText>
                <DescriptionText>{description}</DescriptionText>
              </TextContainer>
            </SlideContainer>
          </Slide>
        ))}
      </StyledSlider>
      <NextButton>&#10095;</NextButton>
    </CarouselWrapper>
  );
}
