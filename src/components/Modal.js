import { useEffect } from "react";
import styled, { css } from "styled-components";
import * as ReactModal from "react-modal";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/future/image";

ReactModal.setAppElement("#__next");

const ModalStyle = styled.div`
  min-height: 18rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.25rem;
  outline: none;
`;

const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: rgba(0, 0, 0, 0.9);
`;

const DescriptionText = styled.p`
  margin: 3rem auto 0;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 2rem;
  color: white;
`;

const CloseButton = styled.button`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: white;
  padding: 0;
  line-height: 0;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 50px;
`;

const CarouselWrapper = styled(CarouselProvider)`
  margin: 2rem auto 0;
  display: flex;
  width: 135rem;
`;

const StyledSlider = styled(Slider)`
  height: 650px;
  width: 1350px;
  margin: 0 auto;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 650px;
`;

const Img = styled(Image)`
  margin: 0 auto;
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

const buttonStyles = css`
  font-size: 8rem;
  color: white;
  opacity: 0.4;
  background: none;
  transition: opacity 0.3s ease-in-out;
  height: fit-content;
  margin: auto 0;

  :hover {
    opacity: 0.15;
  }
`;

const BackButton = styled(ButtonBack)`
  ${buttonStyles}
`;

const NextButton = styled(ButtonNext)`
  ${buttonStyles}
`;

export default function Modal({
  isOpen,
  setIsOpen,
  data,
  isCarousel,
  startingSlide,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  if (isOpen === false) return;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>
          {" "}
          <CloseButton onClick={() => setIsOpen(false)}>&#x2715;</CloseButton>
          {contentElement}
        </OverlayStyle>
      )}
    >
      {isCarousel ? (
        <CarouselWrapper
          naturalSlideWidth={1350}
          naturalSlideHeight={650}
          totalSlides={data.length}
          currentSlide={startingSlide}
        >
          <BackButton>&#10094;</BackButton>
          <StyledSlider>
            {data.map(({ title, description, image, id }) => (
              <Slide index={id} key={id}>
                <SlideContainer>
                  <Img
                    src={image}
                    alt={title}
                    style={{ height: "55rem", width: "auto" }}
                  />
                  <DescriptionText>{description}</DescriptionText>
                </SlideContainer>
              </Slide>
            ))}
          </StyledSlider>
          <NextButton>&#10095;</NextButton>
        </CarouselWrapper>
      ) : (
        <>
          <Image
            src={data.image}
            alt={data.description}
            style={{ height: "70vh", width: "auto" }}
          />
          <DescriptionText>{data.description}</DescriptionText>
        </>
      )}
    </ReactModal>
  );
}
