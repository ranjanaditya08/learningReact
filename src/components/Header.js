import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNAme, setBtnName] = useState("Login");

  // if there is no dependency array then useEffect will be called after each render
  // if there is [] array then it will be called once
  // if there is a value inside dependency arr then it will be called each time the value is changed
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contact US</Link>
          </li>
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
