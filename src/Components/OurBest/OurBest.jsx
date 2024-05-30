import Card from "../Card/Card.jsx";
import solimo from "/src/img/tahometr.jpg";
import presto from "/src/img/seismometr.jpg";
import aromistico from "/src/img/termograf.jpg";

const items = [
  { id: 1, img: solimo, title: "Тахометр Chauvin Arnoux", price: "269.99$", country: "Россия" },
  { id: 2, img: presto, title: "Сейсморадар PSI Piletest", price: "269.99$", country: "Россия" },
  { id: 3, img: aromistico, title: "Термограф Dahua", price: "269.99$", country: "Россия" }
];

const OurBest = () => {
  return (
    <section className="our text-center mb-32">
      <div className="container">
        <h2 className="text-4xl text-white mt-20 mb-10">Наши приборы</h2>
        
        <div className="justify-between pb-28">
          <div className="flex justify-evenly">
            {items.map(item => (
              <Card
                key={item.id}
                id={item.id}
                cardImg={item.img}
                cardTitle={item.title}
                cardCountry={item.country}
                cardPrice={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBest;