import styled from "styled-components";
import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";
import { motion } from "framer-motion";

export const HeroSect = styled.section`
  height: 90vh;
  width: 100%;
  position: relative;
`;

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

export const HeroSlide = styled.div`
  height: 100%;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
`;

export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const HeroImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;

  /* object-fit: cover; */
  /* border: 2px dashed blue; */
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-20%);
  left: 2rem;
  z-index: 10;
  color: #ebebeb;
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 650px) {
    max-width: 600px;
    font-size: 1.7rem;
  }
`;

export const HeroPrice = styled.p`
  margin: 1.2rem 0 2rem;
  font-size: 1.6rem;

  @media (max-width: 650px) {
    max-width: 600px;
    font-size: 1.2rem;
  }
`;

export const SliderBtns = styled.div`
  position: absolute;
  /* border: 2px solid green; */
  bottom: 0.5rem;
  right: 1rem;
  z-index: 100;

  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 0.55rem;
`;

export const SlidePrev = styled(VscArrowSmallLeft)`
  height: 45px;
  width: 45px;
  background: #ce9120;
  color: #ebebeb;
  cursor: pointer;
  transform: scale(1) translateX(0);
  display: inline-block;
  transition: transform 0.35s ease;

  &:hover {
    transform: scale(0.84) translateX(0.28rem);
  }
`;

export const SlideNext = styled(VscArrowSmallRight)`
  height: 37px;
  width: 37px;
  display: inline-block;
  border: 1px solid #777676;
  border-left: none;
  background-color: #ebebeb;
  cursor: pointer;
  color: #4d4a4a;
  transform: scale(1) translateX(0);
  transition: transform 0.35s ease;

  &:hover {
    border: none;
    transform: scale(1.24);
  }
`;
