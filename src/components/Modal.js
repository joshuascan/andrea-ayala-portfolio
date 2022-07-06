import { useEffect } from "react";
import styled from "styled-components";
import * as ReactModal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  text-align: center;
  color: white;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

const CloseButton = styled.button`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: white;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 50px;
  z-index: 1000;

  @media ${({ theme }) => theme.breakpoints.md} {
    right: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    top: 20px;
    right: 50%;
    left: 50%;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CarouselImage = styled(Image)`
  margin: 0 auto;
`;

const Img = styled(Image)`
  max-width: ${({ title }) =>
    title === "Hello Doll" || title === "Superkids" ? "2000px" : "1600px"};
  height: ${({ title }) =>
    title === "Hello Doll" || title === "Superkids" || title === "CD Redesign"
      ? "85vh"
      : "auto"};
  width: ${({ title }) =>
    title === "Hello Doll" || title === "Superkids" || title === "CD Redesign"
      ? "auto"
      : "90vw"};

  @media ${({ theme }) => theme.breakpoints.xl} {
    height: ${({ title }) => (title === "Hello Doll" ? "85vh" : "auto")};
    width: ${({ title }) => (title === "Hello Doll" ? "auto" : "90vw")};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: auto;
    width: ${({ title }) => (title === "Hello Doll" ? "85vw" : "95vw")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: auto;
    width: 95vw;
  }
`;

const StyledSwiper = styled(Swiper)`
  margin-top: 2rem;
  display: flex;
  width: 135rem;
  --swiper-navigation-color: rgba(255, 255, 255, 0.4);
  --swiper-pagination-color: rgba(255, 255, 255, 0.8);
  --swiper-pagination-bullet-inactive-color: rgb(75, 75, 75);
  --swiper-pagination-bullet-inactive-opacity: 1;
  padding-bottom: 4rem;

  :hover {
    .swiper-button-prev,
    .swiper-button-next {
      transition: color 0.3s ease-in-out;

      :hover {
        color: rgba(255, 255, 255, 0.15);
      }
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 50rem;
    width: 100%;
  }
`;

export default function Modal({
  isOpen,
  setIsOpen,
  data,
  isCarousel,
  startingSlide,
  imageHeight,
  containerHeight,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

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
        <StyledSwiper
          cssMode={true}
          navigation={true}
          rewind={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          initialSlide={startingSlide}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {data.map(({ title, description, image, id }) => (
            <SwiperSlide key={id}>
              <SlideContainer>
                <CarouselImage
                  src={image}
                  alt={title}
                  style={{ height: imageHeight, width: "auto" }}
                />
                {description && (
                  <DescriptionText>{description}</DescriptionText>
                )}
              </SlideContainer>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      ) : (
        <>
          <Img src={data.image} alt={data.description} title={data.title} />
          <DescriptionText>{data.description}</DescriptionText>
        </>
      )}
    </ReactModal>
  );
}
