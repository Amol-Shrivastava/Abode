import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export const NavBtn = styled(Link)`
  background: #ce9120;
  padding: 0.4rem 1.6rem;
  text-align: center;
  border-radius: 7px;
  color: #000d1a;
  font-size: 0.8rem;
  font-style: italic;
  transition: all 0.3s ease;
  &:hover {
    outline: 2px dashed #ebebeb;
    outline-offset: 3px;
    color: #ebebeb;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const SliderButtonStyles = styled(Link)`
  border-radius: 4px;
  text-align: center;
  font-size: 0.8rem;
  background: #ebebeb;
  color: #1d1b1b;
  font-style: italic;
  transition: all 0.35s ease;
  padding: 0.45rem 1.7rem;

  &:hover {
    outline: 2px dashed #ebebeb;
    outline-offset: 3px;
    background-color: #ce9120;
    color: #ebebeb;
    font-style: italic;
  }
`;

export const Arrow = styled(BsArrowRight)`
  position: relative;
  top: 0.1rem;
  left: 0.5rem;
`;
