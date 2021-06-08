import React from "react";

import { NavBtn } from "./Button.elements";

const NavButton = ({ link }) => {
  return <NavBtn to={link}>Sign Up</NavBtn>;
};

export default NavButton;
