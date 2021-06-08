import styled from "styled-components";
import { Link } from "react-router-dom";
import { Arrow } from "../Buttons/Button.elements";

export const ProdWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(365px - 3rem), 1fr));
  grid-gap: 1.5rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    grid-gap: 3rem;
  }
`;

export const Product = styled(Link)`
  border: 1px solid #d6cfcf;
`;

export const ProductPicCont = styled.div`
  position: relative;
  z-index: 5;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const ProductPic = styled.img``;

export const ProductContent = styled.div`
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  color: #1e1e1e;
  height: 75px;

  @media (max-width: 400px) {
    /* height: 71px; */
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
`;

export const ProductButton = styled(Link)`
  display: inline-block;
  color: #ce9120;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  margin-bottom: 1rem;

  &:hover {
    border-bottom: 1px solid #ce9120;
  }

  @media (max-width: 768px) {
    font-size: 0.92rem;
  }
`;

export const ArrowProd = styled(Arrow)`
  top: 0.12rem;
  left: 0.3rem;
  font-size: 0.89rem;
  display: inline-block;

  color: #ce9120;
`;

export const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  margin-top: 2rem;
`;
