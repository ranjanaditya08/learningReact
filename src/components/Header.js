import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNAme, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-logout-btn"
            onClick={() => {
              btnNAme === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnNAme}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
