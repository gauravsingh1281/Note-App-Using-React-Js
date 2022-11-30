import React from "react";
import Logo from "../Images/applogo.png";
const Header = () => {
  return (
    <>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={Logo}
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Keep
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
