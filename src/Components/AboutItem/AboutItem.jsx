import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const AboutItem = ({ aboutCoffee, aboutImg, imgName }) => {
  return (
    <div className="container">
      <div className="flex items-center">
        <img src={aboutImg}
             alt="img"
             className={imgName}/>
        
        <span className={`${aboutCoffee} aboutCoffeeHide flex justify-start mt-4`}>
              <b><span className="text-xl mr-2 ml-8">Страна:</span></b> Россия
              <br/>
              <br/>
              <div className="flex justify-between">
              <div className="w-[700px] mr-8 ml-8">
                <b><span className="text-xl">Описание:</span></b>
                <br/>
                <span>
                  Газоанализатор метана (CH4) серии GPro 500 — это уникальный TDL-спектрометр, предназначенный для непосредственного измерения содержания метана в синтез-газе, а также для некоторых систем измерения содержания природного газа. Прибор работает по принципу возвращенного пути лазерного луча, что снижает его требования к техническому обслуживанию.
                </span>
                <br/>
                <br/>
                <b><span className="text-xl">Применение:</span></b>
                <br/>
                <span>
                  Газоанализаторы метана (CH₄) используются для измерения концентрации метана в воздухе и обнаружения утечек газа. Эти устройства играют важную роль в обеспечении безопасности и экологической устойчивости в различных отраслях, таких как горнодобывающая промышленность.
                </span>
              </div>
              <br/>
              <br/>
              <div>
                <b><span className="text-xl">Характеристики:</span></b>
                <div className="grid grid-cols-2 mt-4 justify-items-start text-start">
              <b>Диапазон измерений:</b> <span>0-100% CH4</span>
              <br/>
              <hr/>
              <b>Погрешность измерения:</b> <span>±1% от полной шкалы </span>
              <br/>
              <hr/>
              <b>Метод измерения:</b> <span>Инфракрасная абсорбция или каталитическое окисление</span>
              <br/>
              <hr/>
              <b>Питание:</b> <span>Аккумулятор или постоянный ток</span>
              <br/>
              <hr/>
              <b>Выходные сигналы:</b> <span>Аналоговый или цифровой</span>
              <br/>
                <hr/>
              </div>
              </div>
              </div>
              <br/>
              <br/>
            </span>
      </div>
      <div className="flex items-center justify-end">
        <b>Price: <span className="text-2xl">300.99$</span></b>
        
        <Link to="/our"
              className="relative ml-20 rounded-md flex h-[40px] w-36 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-400 before:duration-500 before:ease-out hover:shadow-blue-700 hover:before:h-56 hover:before:w-56">
          <span className="relative z-10">В каталог</span>
        </Link>
      </div>
    </div>
  );
};

AboutItem.propTypes = {
  aboutCoffee: PropTypes.string
}

export default AboutItem;