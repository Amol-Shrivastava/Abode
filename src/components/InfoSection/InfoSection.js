import React from "react";
import {
  InfoWrapper,
  InfoContent,
  InfoPicCont,
  InfoTitle,
  InfoPic,
  CtaButton,
} from "./InfoSection.elements";

import { Cont, DescPara } from "../GlobalStyles";

const InfoSection = ({ justify, title, para1, para2, src, button }) => {
  return (
    <Cont>
      <InfoWrapper justify={justify}>
        <InfoContent
          data-aos={justify === "right" ? "fade-right" : "fade-left"}
          data-aos-duration="800"
          data-aos-anchor-placement="center center"
        >
          <InfoTitle>{title}</InfoTitle>
          <DescPara>{para1}</DescPara>
          <DescPara second="second">{para2}</DescPara>
          <CtaButton>{button}</CtaButton>
        </InfoContent>

        <InfoPicCont
          data-aos={justify === "right" ? "fade-left" : "fade-right"}
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <InfoPic src={src} />
        </InfoPicCont>
      </InfoWrapper>
    </Cont>
  );
};

export default InfoSection;
