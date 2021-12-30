import React from "react";

import NavItem from "../NavItem/NavItem";

import "./NavItems.css";

const NavItems = () => {
  return (
    <ul className="nav-items">
      <NavItem link="/">Home</NavItem>
      <NavItem link="/account">Account</NavItem>
      <NavItem link="/about">About us</NavItem>
    </ul>
  );
};

export default NavItems;
