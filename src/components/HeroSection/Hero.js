import React, { useState, useRef, useEffect } from "react";
import {
  HeroSect,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  HeroTitle,
  HeroPrice,
  SliderBtns,
  SlidePrev,
  SlideNext,
} from "./Hero.elements";
import { SliderData } from "../../data/SliderData";
import SliderButton from "../Buttons/SliderButton";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 4000);

    return function () {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) clearTimeout(timeout.current);

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const ImageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: 0.45,
    },
  };

  return (
    <HeroSect>
      <HeroWrapper>
        <AnimatePresence>
          {SliderData.map((item, index) => (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage
                    src={item.image}
                    alt={item.title}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    variants={ImageVariants}
                  />
                  <HeroContent>
                    <HeroTitle data-aos="fade-down" data-aos-duration="800">
                      {item.title}
                    </HeroTitle>
                    <HeroPrice
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="250"
                    >
                      {item.price}
                    </HeroPrice>
                    <SliderButton path={item.path} text={item.label} />
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          ))}

          <SliderBtns>
            <SlidePrev onClick={prevSlide} />
            <SlideNext onClick={nextSlide} />
          </SliderBtns>
        </AnimatePresence>
      </HeroWrapper>
    </HeroSect>
  );
};

export default Hero;
