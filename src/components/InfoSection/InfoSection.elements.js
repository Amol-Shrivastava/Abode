import styled from "styled-components";
import { NavBtn } from "../Buttons/Button.elements";
import { DescPara, SectionHeading } from "../GlobalStyles";

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ justify }) =>
    justify === "right" ? "row" : "row-reverse"};
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const InfoContent = styled.div`
  position: relative;
  flex: 0 0 50%;
  z-index: 5;
  @media (max-width: 920px) {
    margin-bottom: 6rem;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const InfoPicCont = styled.div`
  flex: 1;
  max-width: 350px;
  position: relative;
  z-index: 5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const InfoPic = styled.img``;

export const InfoTitle = styled(SectionHeading)`
  margin-bottom: 1.4rem;
`;

export const InfoPara = styled(DescPara)`
  margin-top: ${({ second }) => (second === "second" ? "2.2rem" : "0")};
`;

export const CtaButton = styled(NavBtn)`
  display: inline-block;
  margin-top: 2rem;
  &:hover {
    outline: 2px dashed #5d606e;
    outline-offset: 3px;
    color: #ebebeb;
  }
`;
