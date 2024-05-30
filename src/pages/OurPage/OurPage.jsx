import Header from "../../Components/Header/Header.jsx";
import About from "../../Components/About/About.jsx";
import Card from "../../Components/Card/Card.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import ItemFilter from "../../Components/ItemFilter/ItemFilter.jsx";
import SearchPanel from "../../Components/SearchPanel/SearchPanel.jsx";

import venezia from "/src/img/tahometr.jpg";
import roma from "/src/img/seismometr.jpg";
import napoli from "/src/img/termograf.jpg";

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

import aboutIt from "/src/img/kip.jpg";
import {Component} from "react";

class OurPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: 'Тахометр Chauvin Arnoux', country: 'Россия', price: '269.99$', img: venezia, id: 1},
        {title: 'Сейсморадар PSI Piletest', country: 'Россия', price: '269.99$', img: roma, id: 2},
        {title: 'Термограф Dahua', country: 'Россия', price: '269.99$', img: napoli, id: 3},
      ],
      data2: [
        {title: 'Газоанализатор метана (CH4)', country: 'Китай', price: '300.99$', img: gaz, id: 4},
        {title: 'Газоанализатор кислорода (O2)', country: 'Китай', price: '600.99$', img: gaz1, id: 5},
        {title: 'Газоанализатор угарного газа', country: 'Китай', price: '269.99$', img: gaz2, id: 6},
      ],
      data3: [
        {title: 'Датчик CO2 InFit 761e', country: 'Россия', price: '200.99$', img: datchik, id: 7},
        {title: 'Корпус датчика CO2 InFit 761e', country: 'Россия', price: '600.99$', img: datchik2, id: 8},
        {title: 'Датчик электропроводности', country: 'Россия', price: '269.99$', img: datchik3, id: 9},
      ],
      data4: [
        {title: 'Трансмиттер M400G 2XH', country: 'Китай', price: '300.99$', img: trans1, id: 10},
        {title: 'Поточный анализатор', country: 'Китай', price: '600.99$', img: trans2, id: 11},
        {title: 'Датчик 4000TOCe', country: 'Китай', price: '269.99$', img: trans3, id: 12},
      ],
      data5: [
        {title: 'Автоподатчик InMotion™', country: 'Россия', price: '300.99$', img: avto, id: 13},
        {title: 'Гравиметрический анализатор', country: 'Россия', price: '600.99$', img: avto1, id: 14},
        {title: 'Синхронный термоанализатор', country: 'Россия', price: '269.99$', img: avto2, id: 15},
      ],
      data6: [
        {title: 'Вакуумный компаратор массы', country: 'Китай', price: '300.99$', img: vakuum, id: 16},
        {title: 'Роботизированный компаратор', country: 'Китай', price: '600.99$', img: vakuum1, id: 17},
        {title: 'Компаратор массы', country: 'Китай', price: '269.99$', img: vakuum2, id: 18},
      ],
      term: '',
      countryFilter: 'все',
    }
  }
  
  searchCoffee = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    
    return items.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
  }
  
  onUpdateSearch = (term) => {
    this.setState({ term });
  }
  
  filterByCountry = (items) => {
    const { countryFilter } = this.state;
    if (countryFilter === 'все') {
      return items;
    } else {
      return items.filter(item => item.title.toLowerCase() === countryFilter.toLowerCase());
    }
  }
  
  
  onCountryFilterSelect = (filter) => {
    this.setState({ countryFilter: filter });
  }
  
  
  render() {
    const { data, term, filter, data2, data3, data4, data5, data6 } = this.state;
    const filteredData = this.filterByCountry(this.searchCoffee(data, term));
    const filteredData2 = this.filterByCountry(this.searchCoffee(data2, term));
    const filteredData3 = this.filterByCountry(this.searchCoffee(data3, term));
    const filteredData4 = this.filterByCountry(this.searchCoffee(data4, term));
    const filteredData5 = this.filterByCountry(this.searchCoffee(data5, term));
    const filteredData6 = this.filterByCountry(this.searchCoffee(data6, term));
    
    return (
      <div className="coffee">
        <Header ourHeader={"ourHeader"}
                hideHero={"heroHide"}
                heroTitle={"Каталог"}/>
        
        <div className="container">
          <About
            aboutTitle={'Контрольно-измерительные приборы'}
            aboutBeans={"aboutDisplay"}
            aboutImg={aboutIt}
            imgName={"mr-20 w-72"}
            aboutSpanHide={"aboutSpanHide"}
            aboutSpan={"aboutSpan"}/>
          
          <div className="flex justify-center">
            <SearchPanel
              onUpdateSearch={this.onUpdateSearch}/>
          </div>
          
          <div className="grid grid-cols-5">
            <aside className="aside mt-20">
              <ItemFilter filter={filter}
                          onCountryFilterSelect={this.onCountryFilterSelect}/>
            </aside>
            <div className="">
              
              <div className="mt-20 pb-10">
                <div className="flex drop-shadow-lg">
                  {filteredData.map((coffee) => (
                    <Card
                      id={coffee.id}
                      key={coffee.id}
                      title={coffee.title}
                      cardImg={coffee.img}
                      cardTitle={coffee.title}
                      cardCountry={coffee.country}
                      cardPrice={coffee.price}
                    />
                  ))}
                </div>
              </div>
              
              <div className="pb-10">
                <div className="flex drop-shadow-lg">
                  {filteredData2.map((coffee) => (
                    <Card
                      id={coffee.id}
                      key={coffee.id}
                      title={coffee.title}
                      cardImg={coffee.img}
                      cardTitle={coffee.title}
                      cardCountry={coffee.country}
                      cardPrice={coffee.price}
                    />
                  ))}
                </div>
              </div>
              
              <div className="pb-10">
                <div className="flex drop-shadow-lg">
                  {filteredData6.map((coffee) => (
                    <Card
                      id={coffee.id}
                      key={coffee.id}
                      title={coffee.title}
                      cardImg={coffee.img}
                      cardTitle={coffee.title}
                      cardCountry={coffee.country}
                      cardPrice={coffee.price}
                    />
                  ))}
                </div>
              </div>
              
              <div className="pb-10">
                <div className="flex drop-shadow-lg">
                  {filteredData5.map((coffee) => (
                    <Card
                      id={coffee.id}
                      key={coffee.id}
                      title={coffee.title}
                      cardImg={coffee.img}
                      cardTitle={coffee.title}
                      cardCountry={coffee.country}
                      cardPrice={coffee.price}
                    />
                  ))}
                </div>
              </div>
              
              <div className="pb-10">
                <div className="flex drop-shadow-lg">
                  {filteredData4.map((coffee) => (
                    <Card
                      id={coffee.id}
                      key={coffee.id}
                      title={coffee.title}
                      cardImg={coffee.img}
                      cardTitle={coffee.title}
                      cardCountry={coffee.country}
                      cardPrice={coffee.price}
                    />
                  ))}
                </div>
              </div>
              
              <div className="pb-10">
                <div className="flex drop-shadow-lg">
                  {filteredData3.map((coffee) => (
                    <Card
                      id={coffee.id}
                      key={coffee.id}
                      title={coffee.title}
                      cardImg={coffee.img}
                      cardTitle={coffee.title}
                      cardCountry={coffee.country}
                      cardPrice={coffee.price}
                    />
                  ))}
                </div>
              </div>
            
            </div>
          </div>
          
          <Footer/>
        </div>
      </div>
    );
  }
}

export default OurPage;