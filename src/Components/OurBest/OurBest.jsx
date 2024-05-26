import Card from "../Card/Card.jsx";
import solimo from "../../../public/gaz-analiz.png";
import presto from "../../../public/vodorod.png";
import aromistico from "../../../public/ugar-gaz.png";

const OurBest = () => {
  return (
    <section className="our text-center mb-32">
      <div className="container">
        <h2 className="text-4xl text-white mt-20 mb-10">Наши приборы</h2>
        
        <div className="justify-between pb-28">
          <div className="flex justify-evenly">
            <Card cardImg={solimo}
                  cardTitle={"Газоанализатор метана (CH4)"}
                  cardPrice={"10.73$"}/>
            <Card cardImg={presto}
                  cardTitle={"Газоанализатор кислорода (O2)"}
                  cardPrice={"15.99$"}/>
            <Card cardImg={aromistico}
                  cardTitle={"Газоанализатор угарного газа: GPro 500"}
                  cardPrice={"6.99$"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBest;