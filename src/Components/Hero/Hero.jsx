import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Hero = ({ heroHide }) => {
  return (
    <section className={`hero text-center text-white ${heroHide}`}>
      <div className="container">
        <div className="hero__content pt-20">
          <h1 className="text-6xl mb-5">Информационно-справочная система</h1>
          <h4 className="text-3xl mt-10 mb-3">по контрольно-измерительным приборам</h4>
          <h4 className="text-3xl mb-10">в горнодобывающей промышленности</h4>
          
          <div className="flex justify-center">
            <Link to="/our"
                  className="relative rounded-md flex h-[45px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-400 before:duration-500 before:ease-out hover:shadow-blue-700 hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">Узнать больше</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  heroHide: PropTypes.string
}

export default Hero;