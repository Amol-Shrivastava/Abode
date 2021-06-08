import styled from "styled-components";
import { Cont } from "../GlobalStyles";

export const IntCont = styled(Cont)`
  padding: 5rem 0;
  /* border: 3px dashed blue; */
`;

export const InteriorWrapper = styled.div`
  background: #060622;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
  /* border: 2px dashed yellow; */
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const InteriorContent = styled.div`
  background: #ebebeb;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextCont = styled.div`
  padding: 2rem 0 2rem 4rem;
  max-width: 700px;
  @media (max-width: 1000px) {
    padding: 2rem 1rem;
  }
`;

export const InteriorPicCont = styled.div`
  max-width: 600px;

  @media (max-width: 1000px) {
    margin-top: 2rem;
    padding: 0 2rem;
  }
`;

export const InteriorPic = styled.img``;
