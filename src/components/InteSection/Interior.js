import React from "react";
import { DescPara, SectionHeading } from "../GlobalStyles";
import { CtaButton } from "../InfoSection/InfoSection.elements";
import {
  IntCont,
  InteriorWrapper,
  TextCont,
  InteriorContent,
  InteriorPicCont,
  InteriorPic,
} from "./Interior.elements";

const Interior = ({ title, para1, para2, path, src, button }) => {
  return (
    <>
      <IntCont>
        <InteriorWrapper>
          <InteriorContent>
            <TextCont data-aos="fade-left" data-aos-duration="800">
              <SectionHeading>{title}</SectionHeading>

              <DescPara>{para1}</DescPara>

              <DescPara>{para2}</DescPara>

              <CtaButton to={path}>{button}</CtaButton>
            </TextCont>
          </InteriorContent>

          <InteriorPicCont>
            <InteriorPic
              src={src}
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
            />
          </InteriorPicCont>
        </InteriorWrapper>
      </IntCont>
    </>
  );
};

export default Interior;
