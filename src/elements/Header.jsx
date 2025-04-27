import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const Header = () => {
  const headerMenu = [
    {
      name: "Explore",
      url: "/explore",
    },
    {
      name: "Create",
      url: "/create",
    },
    {
      name: "Community",
      url: "/community",
    },
  ];
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="header-menu">
        {headerMenu.map((item) => (
          <Link to={item.url} key={item.name} className="header-menu-item">
            {item.name}
          </Link>
        ))}
      </nav>
      <Button padding="21px 30px" type="transparent" color="var(--colorYellow)">Connect Wallet</Button>
    </header>
  );
};

export default Header;
