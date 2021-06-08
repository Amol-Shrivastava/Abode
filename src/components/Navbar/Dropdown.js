import React from "react";
import {
  DropdownCont,
  Icon,
  CloseIcon,
  DropdownTitle,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  NavButtonDropdown,
} from "./Navbar.elements";

import { NavMenuData } from "../../data/NavMenuData";

const Dropdown = ({ toggle, toggleFunc }) => {
  return (
    <DropdownCont toggle={toggle}>
      <Icon>
        <CloseIcon onClick={toggleFunc} />
      </Icon>
      <DropdownTitle>Abode</DropdownTitle>

      <DropdownWrapper>
        <DropdownMenu>
          {NavMenuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
          <NavButtonDropdown to="/signup">Sign Up</NavButtonDropdown>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownCont>
  );
};

export default Dropdown;
