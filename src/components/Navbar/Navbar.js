import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ListSect,
  NavbarSect,
  ListItem,
  Logo,
  MenuBars,
} from "./Navbar.elements";

import { NavMenuData } from "../../data/NavMenuData";
import NavButton from "../Buttons/NavButton";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [button, setButton] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 650) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const openMenu = () => {
    setToggle(!toggle);
  };

  console.log(
    `navbar: ${navbar} pageYOffset: ${window.pageYOffset} location.pathname: ${location.pathname}`
  );

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#060622" : "transparent",
    transition: "0.35s",
  };

  return (
    <>
      <NavbarSect style={style}>
        <Logo to="/">Abode</Logo>
        {button && <MenuBars onClick={openMenu} />}
        <ListSect>
          {NavMenuData.map((item, index) => (
            <ListItem to={item.link} key={index}>
              {item.title}
            </ListItem>
          ))}
        </ListSect>

        <NavButton />
      </NavbarSect>
      {toggle && (
        <Dropdown toggle={toggle} toggleFunc={openMenu} setToggle={setToggle} />
      )}
    </>
  );
};

export default Navbar;
