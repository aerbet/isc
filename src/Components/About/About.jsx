import Mountain from "../Mountains/Mountain.jsx";
import blackBeans from "/src/img/mountains.svg";

import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Description from "../Description/Description.jsx";

const About = ({ aboutTitle, aboutBeans, aboutImg, imgName, aboutSpan, aboutSpanB, aboutSpanHide, aboutCoffee}) => {
  return (
    <section className="about text-center">
      <div className="container">
        <div className={`${aboutBeans} flex justify-center items-center`}>
            <img src={aboutImg}
                 alt=""
                className={imgName}/>
          <div>
            <h2 className="text-2xl mt-20 mb-4">{aboutTitle}</h2>
            <Mountain coffeeSvg={blackBeans}/>
            <div className={`${aboutSpanHide}`}>
              <h2 className={"text-4xl mb-12 font-medium"}>Контрольно-измерительные приборы</h2>
              
              <span className={`w-2/4 block mx-auto mt-8 mb-24 text-xl`}>
                Контрольно-измерительные приборы (КИП) в горнодобывающей промышленности играют ключевую роль в обеспечении безопасности, эффективности и качества производственных процессов. Эти приборы используются для мониторинга и контроля различных параметров, таких как температура, давление, уровень жидкости, концентрация газов, вибрация и другие критически важные показатели.
              </span>
            </div>
            <span className={`${aboutSpan} aboutHide block mx-auto mt-2 mb-24`}>
              Контрольно-измерительные приборы (КИП) в горнодобывающей промышленности играют ключевую роль в обеспечении безопасности, эффективности и качества производственных процессов. Эти приборы используются для мониторинга и контроля различных параметров, таких как температура, давление, уровень жидкости, концентрация газов, вибрация и другие критически важные показатели.
            </span>
            <div className={`${aboutSpanB} aboutHide block mx-auto mt-2 mb-24 w-[900px] text-xl`}>
              <Description />
            </div>
            <span className={`${aboutCoffee} aboutCoffeeHide w-2/4 flex justify-start mt-4 mb-24`}>
              <b><span className="text-xl mr-2">Страна:</span></b> Россия
              <br/>
              <br/>
              <b><span className="text-xl">Описание:</span></b>
              <br/>
              <span>
                Газоанализатор метана (CH4) серии GPro 500 — это уникальный TDL-спектрометр, предназначенный для непосредственного измерения содержания метана в синтез-газе, а также для некоторых систем измерения содержания природного газа. Прибор работает по принципу возвращенного пути лазерного луча, что снижает его требования к техническому обслуживанию.
              </span>
              <br/>
              <br/>
              <b><span className="text-xl">Характеристики:</span></b>
              <br/>
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
              <br/>
              <br/>
              <div className="flex">
                <b>Price:  <span className="text-2xl">300.99$</span></b>
                
                <Link to="/our"
                      className="relative ml-20 rounded-md flex h-[40px] w-36 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-400 before:duration-500 before:ease-out hover:shadow-blue-700 hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">В каталог</span>
              </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


About.propTypes = {
  aboutTitle: PropTypes.string,
  aboutBeans: PropTypes.string,
  aboutImg: PropTypes.string,
  aboutSpan: PropTypes.string,
  aboutSpanHide: PropTypes.string,
  imgName: PropTypes.string,
  aboutCoffee: PropTypes.string
}

export default About;