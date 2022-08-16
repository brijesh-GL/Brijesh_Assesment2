import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img src='https://cdn-icons.flaticon.com/png/128/3247/premium/3247281.png?token=exp=1660242507~hmac=a9251876ca47982736a9670391cca773' alt='hi' />
            Dashboard
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                // onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Books"
                activeClassName="active"
                className="nav-links"
                // onClick={handleClick}
              >
                Books📒
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Cart"
                activeClassName="active"
                className="nav-links"
                
              >
               <i class="fa-solid fa-cart-arrow-down"></i> Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Dashboard"
                activeClassName="active"
                className="nav-links"
               
              >
                <i class="fa-solid fa-gauge"></i>Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
               
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;