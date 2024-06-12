import { Link } from "react-router-dom"
import PropTypes from "prop-types";

const Navbar = ({ textColor }) => {
  return (
    <nav className="navbar">
      <ul className={`flex jus items-center text-${textColor}`}>
        <Link
          to="/"
          className="text-l mt-6 cursor-pointer">
          Главная
        </Link>
        <Link
          to="/our"
          className="text-l ml-10 mt-6 cursor-pointer">
          Каталог
        </Link>
        <Link
          to="/for"
          className="text-l ml-10 mt-6 cursor-pointer">
          О нас
        </Link>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  textColor: PropTypes.string,
}

export default Navbar;