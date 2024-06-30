import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "./styles/slider.css";

const Slidelink = ({ images, autoplayInterval = 3000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const leftSlide = () => {
    if (activeSlide < images.length - 1) {
      setActiveSlide((prev) => prev + 1);
    } else {
      setActiveSlide(0); // Loop back to the first slide
    }
  };

  const rightSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    } else {
      setActiveSlide(images.length - 1); // Loop back to the last slide
    }
  };

  useEffect(() => {
    const interval = setInterval(leftSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [activeSlide, autoplayInterval]);

  return (
    <section className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="imageContainer" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="leftIcon" onClick={rightSlide}>
        <MdArrowBackIos />
      </div>
      <div className="rightIcon" onClick={leftSlide}>
        <MdArrowForwardIos />
      </div>
      <div className="dotted">
        {images.map((dot, index) => {
          return (
            <span
              className={activeSlide === index && "active"}
              key={dot}
              onClick={() => setActiveSlide(index)}
            ></span>
          );
        })}
      </div>
    </section>
  );
};

Slidelink.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoplayInterval: PropTypes.number,
};

export default Slidelink;
