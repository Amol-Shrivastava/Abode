import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cont } from "../GlobalStyles";

export const FooterCont = styled(Cont)`
  /* border: 1px solid red; */
  background: #060622;
  color: #ebebeb;
  padding: 5rem 2rem 1rem;
`;

export const FooterWrapper = styled.div`
  /* border: 1px solid yellow; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }
`;

export const FooterLeft = styled.div`
  /* border: 1px solid green; */
`;

export const FooterHeadText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const FooterSocial = styled.div`
  margin: 2rem 0;
  padding-left: 0.5rem;
`;

export const FooterSocialItems = styled.div``;

export const FooterSocialLinks = styled(Link)`
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
  color: #ebebeb;
  font-size: 1.3rem;
  position: relative;
  z-index: 5;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    top: -0.35rem;
    left: -0.45rem;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(235, 235, 235, 0.2);
    z-index: -1;
  }

  &:hover {
    color: #060620;
    &::after {
      background: #ce9120;
    }
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const FooterListsSect = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Separator = styled.div`
  margin: 0 2rem;
`;

export const FooterLinks = styled(Link)`
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  color: rgba(235, 235, 235, 0.6);
  font-size: 0.8rem;
  &:hover {
    color: #ce9120;
  }
`;

export const FooterButton = styled.div`
  @media (min-width: 1000px) {
    transform: translateX(10rem);
  }
`;

export const FooterCopy = styled.div`
  margin: 1rem auto;
  color: #ce9120;
  text-align: center;
  font-size: 0.72rem;
  font-style: italic;
`;
