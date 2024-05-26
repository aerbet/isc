import Header from "../../Components/Header/Header.jsx";
import About from "../../Components/About/About.jsx";

import gaz from "/src/img/gaz-analiz.png"


const ItemPage = () => {
  return (
    <div>
      <Header ourHeader={"ourHeader"}
              hideHero={"heroHide"}
              heroTitle={"Наш товар"}/>
      <About
        aboutTitle={'Газоанализатор метана (CH4)'}
        aboutBeans={"aboutDisplay"}
        aboutImg={gaz}
        imgName={"mr-20"}
        aboutSpanHide={"aboutSpanHide"}
        aboutCoffee={"aboutCoffee"}/>
      
    </div>
  );
};

export default ItemPage;