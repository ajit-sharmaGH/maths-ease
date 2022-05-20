import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useThemeContext } from "../../context/themeContext.js";
const Navbar = () => {
  const [toggle, setToggle] = useState("none");
  const { theme, toggleTheme } = useThemeContext();

  const toggleBurger = () => {
    if (toggle === "none") {
      setToggle("block");
    } else {
      setToggle("none");
    }
  };
  return (
    <>
      <header className="header-body flex-wrap others_header-part">
        <div className="header_logo">
          <p> Maths Ease </p>{" "}
        </div>{" "}
        <div>
          {" "}
          {theme === "moon-icon" ? (
            <span onClick={toggleTheme} className="dark_light-icon cursor">
              <i className="fa-solid fa-sun"> </i>{" "}
            </span>
          ) : (
            <span onClick={toggleTheme} className="dark_light-icon cursor">
              <i className="fa-solid fa-moon"> </i>{" "}
            </span>
          )}{" "}
        </div>{" "}
        <div className="ham-burger cursor" onClick={toggleBurger}>
          <i className="fa-solid fa-bars"> </i>{" "}
        </div>{" "}
      </header>{" "}
      <div
        className="navbar_list-names"
        style={{ display: toggle, transition: "0.5s ease-in" }}
      >
        <ul className="flex-col-center">
          <li>
            <Link to="/" className="link_tag">
              Home{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/calculator" className="link_tag">
              Simple Calculator{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/si" className="link_tag">
              Simple Interest{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/ci" className="link_tag">
              compound interest{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/bmi" className="link_tag">
              body mass index{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/crm" className="link_tag">
              cash register manager{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </>
  );
};
export { Navbar };
