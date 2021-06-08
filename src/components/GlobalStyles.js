import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 62.5%;
        font-family: 'Open Sans', sans-serif;
        overflow-x: hidden;
    }

    img{
        max-width: 100%;
        display: inline-block;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

`;

export const SectionHeading = styled(motion.h1)`
  font-size: 1.5rem;
  color: #161513;
  display: inline-block;
  border-bottom: 1px solid #ce9120;
`;

export const DescPara = styled.p`
  font-size: 1rem;
  color: #313030;
  line-height: 1.5;
  margin-top: 1.3rem;
`;

export const Cont = styled.section`
  padding: 5rem 2rem;
  /* border: 2px dashed green; */
`;
