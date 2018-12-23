import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu right>
      
      <a className="menu-item" href="/">
        <strong><h1>About us</h1></strong>
      </a>

      <a className="menu-item" href="/">
        <strong><h1>Our Work</h1></strong>
      </a>

      <a className="menu-item" href="/">
        <strong><h1>Meet the Team</h1></strong>
      </a>

      <a className="menu-item" href="/">
        Contact
      </a>
      
      <a className="menu-item" href="/">
        Careers
      </a>
      
      <a className="menu-item" href="/">
        Blog
      </a>
      
      <br></br>
      
      <li className="menu-item" href="/">
       <div className="menu-search"><input type="text" value="Search" /> <i class="fa fa-search" aria-hidden="true"></i></div>
      </li>
    </Menu>
  );
};