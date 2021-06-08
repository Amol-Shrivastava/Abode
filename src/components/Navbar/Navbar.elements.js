import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { NavBtn } from "../Buttons/Button.elements";

export const NavbarSect = styled.nav`
  /* border: 2px solid yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.8rem;
  position: fixed;
  z-index: 900;
  width: 100%;
  background: transparent;
`;

export const StyleLinks = css`
  text-decoration: none;
`;

export const Logo = styled(Link)`
  ${StyleLinks}
  color: #ebebeb;
  font-weight: bold;
  font-size: 1.3rem;
  font-style: italic;
  /* letter-spacing: 1.2px; */
`;

export const MenuBars = styled(FiAlignRight)`
  color: rgba(235, 235, 235, 0.6);
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    color: #ce9120;
  }
`;

export const ListSect = styled.ul`
  display: flex;
  justify-content: center;
  /* border: 2px solid blue; */
  margin-left: 2rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const ListItem = styled(Link)`
  ${StyleLinks}
  color: rgba(235, 235, 235, 0.8);
  font-size: 0.83rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    height: 3px;
    width: 103%;
    border-radius: 15px;
    background: #ce9120;
    transform: scale(0);
    transition: transform 0.35s ease;
    transform-origin: right;
  }
  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    color: #ce9120;
    &::after {
      transform: scale(1);
      transform-origin: left;
    }
  }
`;
/* ------------ DROPDOWN STYLING ------------ */
export const DropdownCont = styled.div`
  position: fixed;
  top: 0;
  top: ${({ toggle }) => (toggle ? "0" : "-100%")};
  left: 0;
  z-index: 999;
  background-color: #0c0a08;
  width: 100%;
  height: 100%;
  transition: all 9s ease-in-out;
  opacity: 1;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  visibility: ${({ toggle }) => (toggle ? "visible" : "hidden")};

  @media (min-width: 651px) {
    display: none;
  }
`;

export const Icon = styled.div`
  /* border: 2px solid blue; */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 2.5rem;
  right: 2rem;
  z-index: 7;
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 1.45rem;
  cursor: pointer;

  color: #918c88;

  &:hover {
    color: #ce9120;
  }
`;

export const DropdownTitle = styled(Link)`
  position: absolute;
  top: 1.8rem;
  left: 2rem;
  z-index: 7;
  color: #ebebeb;
  font-style: italic;
  border-bottom: 2px solid #ce9120;
  /* width: 100%; */
  font-size: 2rem;
`;

export const DropdownWrapper = styled.div`
  border-top: 1px solid #746f6f;
  border-bottom: 1px solid #746f6f;
  position: absolute;
  top: 25%;
  width: 100%;
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 2px solid red; */
`;

export const DropdownLink = styled(Link)`
  padding: 2rem 0;
  width: 100%;
  border-bottom: 1px dashed #413a34;

  color: #d4cccc;
  font-size: 1.1rem;

  &:hover {
    color: #ce9120;
  }

  @media (max-width: 480px) {
    border-bottom: none;
  }
`;

export const NavButtonDropdown = styled(NavBtn)`
  margin: 1.83rem 0;
  background: #ececec;
  padding: 0.5rem 1.9rem;
  font-size: 0.89rem;
  background: #ce9120;

  @media (max-width: 650px) {
    display: block;
  }
`;
