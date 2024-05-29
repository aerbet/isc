import Card from "../Card/Card.jsx";
import solimo from "/src/img/tahometr.jpg";
import presto from "/src/img/seismometr.jpg";
import aromistico from "/src/img/termograf.jpg";

const OurBest = () => {
  return (
    <section className="our text-center mb-32">
      <div className="container">
        <h2 className="text-4xl text-white mt-20 mb-10">Наши приборы</h2>
        
        <div className="justify-between pb-28">
          <div className="flex justify-evenly">
            <Card cardImg={solimo}
                  cardTitle={"Тахометр Chauvin Arnoux"}
                  cardPrice={"269.99$"}/>
            <Card cardImg={presto}
                  cardTitle={"Сейсморадар PSI Piletest"}
                  cardPrice={"269.99$"}/>
            <Card cardImg={aromistico}
                  cardTitle={"Термограф Dahua"}
                  cardPrice={"269.99$"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBest;