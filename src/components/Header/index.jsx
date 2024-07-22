import React from "react";
import Logo from "../../assets/images/logo-ecommerce.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  {" "}
                  <img src={Logo} alt="Logo" />{" "}
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <Button className="countryDrop">
                  <div className="info d-flex flex-column">
                    <span> Your Location</span>
                    <span>India</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
