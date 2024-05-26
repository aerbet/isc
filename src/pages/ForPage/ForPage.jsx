
import About from "../../Components/About/About.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Header from "../../Components/Header/Header.jsx";
import Partners from "../../Components/Partners/Partners.jsx";


const ForPage = () => {
  
  
  return (
    <div className="coffee">
      <Header forHeader={"forHeader"}
              hideHero={"heroHide"}
              heroTitle={"О нас"}/>
      <About
        aboutTitle={'Информационно-справочная система'}
        aboutBeans={"aboutDisplay"}
        aboutSpanHide={"aboutSpanHide"}
        aboutSpanB={"aboutSpanB"}/>
      
      <Partners />
      <Footer/>
    </div>
  );
};

export default ForPage;