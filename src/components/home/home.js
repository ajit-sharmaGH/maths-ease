import "./home.css";
import "../../App.css";
import { useThemeContext } from "../../context/themeContext.js";

const Home = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex-col home-bg-color">
      <header className="header-body flex-wrap">
        <div className="header_logo">
          <p>Maths Ease</p>
        </div>
        <div>
          {theme === "dark-theme" ? (
            <span onClick={toggleTheme} className="dark_light-icon">
              <i class="fa-solid fa-sun"></i>
            </span>
          ) : (
            <span onClick={toggleTheme} className="dark_light-icon">
              <i class="fa-solid fa-moon"></i>
            </span>
          )}
        </div>
      </header>
      <div className="sections_container flex-wrap-center">
        <section className="section flex-center">
          <h3>Simple Calculator </h3>
        </section>
        <section className="section flex-center">
          <h3>Calculate Simple Interest </h3>
        </section>
        <section className="section flex-center">
          <h3>Calculate Compound Interest </h3>
        </section>
        <section className="section flex-center">
          <h3>Calculate Body Mass Index </h3>
        </section>
        <section className="section flex-center">
          <h3>Cash Register Manager </h3>
        </section>
      </div>
      <div className="footer-body flex-wrap-center">
        <p>
          <i class="fa-brands fa-linkedin"></i>
        </p>
        <p>
          <i class="fa-brands fa-github"></i>
        </p>
        <p>
          <i class="fa-brands fa-medium"></i>
        </p>
        <p>
          <i class="fa-brands fa-twitter"></i>
        </p>
      </div>
    </div>
  );
};
export { Home };
