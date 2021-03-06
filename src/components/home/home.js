import "./home.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/themeContext.js";

const Home = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex-col bg-theme-changer">
      <header className="header-body flex-wrap">
        <div className="header_logo">
          <p> Maths Ease </p>
        </div>
        <div>
          {theme === "moon-icon" ? (
            <span onClick={toggleTheme} className="dark_light-icon cursor">
              <i class="fa-solid fa-sun"> </i>
            </span>
          ) : (
            <span onClick={toggleTheme} className="dark_light-icon cursor">
              <i class="fa-solid fa-moon"> </i>
            </span>
          )}
        </div>
      </header>
      <div className="sections_container flex-wrap-center">
        <Link to="/calculator" className="section flex-center">
          <h3> Simple Calculator </h3>
        </Link>
        <Link to="/si" className="section flex-center">
          <h3> Calculate Simple Interest </h3>
        </Link>
        <Link to="/ci" className="section flex-center">
          <h3> Calculate Compound Interest </h3>
        </Link>
        <Link to="/bmi" className="section flex-center">
          <h3> Calculate Body Mass Index </h3>
        </Link>
        <Link to="/crm" className="section flex-center">
          <h3> Cash Register Manager </h3>
        </Link>
      </div>
      <div className="footer-body flex-wrap-center">
        <a
          href="https://linkedin.com/in/itsajitsharma
"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"> </i>
        </a>

        <a
          href="https://github.com/ajit-sharmaGH
"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github"> </i>
        </a>

        <a
          href="https://medium.com/@itsAjitSharma
"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-medium"> </i>
        </a>

        <a
          href="https://twitter.com/its_AjitSharma"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-twitter"> </i>
        </a>
      </div>
    </div>
  );
};
export { Home };
