import Header from "../../Components/Header/Header.jsx";
import About from "../../Components/About/About.jsx";

import venezia from "/src/img/mutnost.jpg";
import roma from "/src/img/compact.jpg";
import napoli from "/src/img/o2-izmer.jpg";

import gaz from "/src/img/gaz-analiz.png"
import gaz1 from "/src/img/kislor.png"
import gaz2 from "/src/img/ugar-gaz.png"

import datchik from "/src/img/datchik.jpg"
import datchik2 from "/src/img/korpus.jpeg"
import datchik3 from "/src/img/datchik-electr.jpg"

import trans1 from "/src/img/transmitter.jpg"
import trans2 from "/src/img/toc-sensor.jpg"
import trans3 from "/src/img/sensor.jpg"

import avto from "/src/img/avtodat.jpg"
import avto1 from "/src/img/termo.webp"
import avto2 from "/src/img/sinc.webp"

import vakuum from "/src/img/vakuum.webp"
import vakuum1 from "/src/img/komp.jpg"
import vakuum2 from "/src/img/komport.jpg"
import AboutItem from "../../Components/AboutItem/AboutItem.jsx";


const ItemPage = () => {
  return (
    <div>
      <Header ourHeader={"ourHeader"}
              hideHero={"heroHide"}
              heroTitle={"Наш товар"}/>
      
      <AboutItem
        aboutImg={gaz}
        aboutCoffee={"aboutCoffee"}
        imgName={"w-[300px] h-[250px]"}/>
      
    </div>
  );
};

export default ItemPage;