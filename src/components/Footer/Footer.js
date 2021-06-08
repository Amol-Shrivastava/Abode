import React from "react";
import { CtaButton } from "../InfoSection/InfoSection.elements";

import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

import {
  FooterCont,
  FooterWrapper,
  FooterLeft,
  FooterHeadText,
  FooterSocial,
  FooterSocialItems,
  FooterSocialLinks,
  FooterRight,
  FooterList,
  FooterListsSect,
  FooterLinks,
  FooterButton,
  FooterCopy,
  Separator,
} from "./Footer.elements";

const Footer = ({ title1, title2, list1, list2, copy, button }) => {
  return (
    <>
      <FooterCont>
        <FooterWrapper>
          <FooterLeft>
            <FooterHeadText>{title1}</FooterHeadText>
            <FooterHeadText>{title2}</FooterHeadText>

            <FooterSocial>
              <FooterSocialItems>
                <FooterSocialLinks to="facebook.com">
                  <FaFacebookF />
                </FooterSocialLinks>

                <FooterSocialLinks to="instagram.com">
                  <FaInstagram />
                </FooterSocialLinks>

                <FooterSocialLinks to="youtube.com">
                  <FaYoutube />
                </FooterSocialLinks>

                <FooterSocialLinks to="twitter.com">
                  <FaTwitter />
                </FooterSocialLinks>
              </FooterSocialItems>
            </FooterSocial>
          </FooterLeft>

          <FooterRight>
            <FooterListsSect>
              <FooterList>
                {list1.map((item) => (
                  <FooterLinks key={item.name}>{item.name}</FooterLinks>
                ))}
              </FooterList>
              <Separator></Separator>
              <FooterList>
                {list2.map((item) => (
                  <FooterLinks key={item.name}>{item.name}</FooterLinks>
                ))}
              </FooterList>
            </FooterListsSect>
            <FooterButton>
              <CtaButton>{button}</CtaButton>
            </FooterButton>
          </FooterRight>
        </FooterWrapper>

        <FooterCopy>{copy}</FooterCopy>
      </FooterCont>
    </>
  );
};

export default Footer;
