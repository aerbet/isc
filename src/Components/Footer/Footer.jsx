import Mountain from "../Mountains/Mountain.jsx";
import Navbar from "../Navbar/Navbar.jsx";

import blackBeans from "../../../public/mountains.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex justify-center mb-3">
          <Navbar textColor="black" logoColor="black" />
        </div>
        <Mountain coffeeSvg={blackBeans} borderColor={"border-black"}/>
      </div>
    </footer>
  );
};

export default Footer;