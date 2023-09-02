import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../wappers/Navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">
          <span>CockTail</span>
        </div>
        <div className="navigators">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>about</NavLink>
            </li>
            <li>
              <NavLink to={"/newsletter"}>newsletter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
