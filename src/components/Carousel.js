import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/future/image";

const CarouselWrapper = styled.div`
  /* width: 500px; */
  margin: 0 auto;
`;

const StyledSlider = styled(Slider)`
  width: 900px;
`;

export default function Carousel() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            src={"/images/fine-art/Abstract_right.png"}
            alt="next image"
            style={{ height: "70vh", width: "auto" }}
          />
        </div>
        <div>
          <Image
            src={"/images/fine-art/Abstract_left.png"}
            alt="next image"
            style={{ height: "70vh", width: "auto" }}
          />
        </div>
        <div>
          <Image
            src={"/images/fine-art/Cherry-Blossom.png"}
            alt="next image"
            style={{ height: "70vh", width: "auto" }}
          />
        </div>
        <div>
          <Image
            src={"/images/fine-art/Russian-Doll.png"}
            alt="next image"
            style={{ height: "70vh", width: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
}
