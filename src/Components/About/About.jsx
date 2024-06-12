import Mountain from "../Mountains/Mountain.jsx";
import blackBeans from "/src/img/mountains.svg";

import PropTypes from "prop-types";
import Description from "../Description/Description.jsx";

const About = ({ aboutTitle, aboutBeans, aboutImg, imgName, aboutSpan, aboutSpanB, aboutSpanHide}) => {
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
  aboutSpanB: PropTypes
}

export default About;