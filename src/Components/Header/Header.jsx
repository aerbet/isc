import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";

import PropTypes from "prop-types";

const Header = ({ heroTitle, ourHeader, forHeader, hideHero }) => {
  return (
    <section className={`header ${ourHeader} ${forHeader}`}>
      <div className="container">
          <Navbar textColor="white" logoColor="white"/>
      </div>
      <h2 className="text-5xl mt-10 text-center text-white">{heroTitle}</h2>
      <Hero heroHide={hideHero}/>
    </section>
  );
};

Header.propTypes = {
  ourHeader: PropTypes.string,
  forHeader: PropTypes.string,
  hideHero: PropTypes.string,
  heroTitle: PropTypes.string,
}

export default Header;