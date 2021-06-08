import React from "react";
import { Link } from "react-router-dom";
import { SliderButtonStyles, Arrow } from "./Button.elements";
const SliderButton = ({ path, text }) => {
  return (
    <Link to={path}>
      <SliderButtonStyles
        data-aos="zoom-out"
        data-aos-duration="800"
        data-aos-delay="350"
      >
        {text}
        <Arrow />
      </SliderButtonStyles>
    </Link>
  );
};

export default SliderButton;
