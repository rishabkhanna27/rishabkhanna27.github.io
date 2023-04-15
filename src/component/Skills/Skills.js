import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

export default function App() {
  const sliderRef = useRef(null);

  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY);
    if (delta > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    // swipeThreshold: 10
  };

  return (
    <div
      className="slider-container"
      onWheel={(e) => handleScroll(e)}
    >
      <Slider {...settings} ref={sliderRef}>
        <div className="slide">
        <div className="main"> Slide 1</div>
        </div>
        <div className="slide">
            <div className="main"> Slide 2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</div>
        </div>
        <div className="slide">Slide 3</div>
        <div className="slide">Slide 4</div>
      </Slider>
    </div>
  );
}