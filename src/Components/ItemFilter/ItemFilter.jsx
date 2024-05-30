import PropTypes from "prop-types";

const ItemFilter = (props) => {
  const buttonsData = [
    {name: 'все', label: 'Все'},
    
    {name: 'тахометр Chauvin Arnoux', label: 'Тахометр'},
    {name: 'сейсморадар PSI Piletest', label: 'Сейсморадар'},
    {name: 'термограф Dahua', label: 'Термограф'},
    
    {name: 'газоанализатор метана (CH4)', label: 'Газоанализатор метана'},
    {name: 'газоанализатор кислорода (O2)', label: 'Газоанализатор кислорода'},
    {name: 'газоанализатор угарного газа', label: 'Газоанализатор угарного газа'},
    
    {name: 'вакуумный компаратор массы', label: 'Вакуумный компаратор'},
    {name: 'роботизированный компаратор', label: 'Роботизиров...'},
    {name: 'компаратор массы', label: 'Компаратор массы'},
    
    {name: 'автоподатчик InMotion™', label: 'Автоподатчик'},
    {name: 'гравиметрический анализатор', label: 'Гравиметриче...'},
    {name: 'синхронный термоанализатор', label: 'Синхронный терм...'},
    
    {name: 'трансмиттер M400G 2XH', label: 'Трансмиттер M400G 2XH'},
    {name: 'поточный анализатор', label: 'Поточный анализатор'},
    {name: 'датчик 4000TOCe', label: 'Датчик 4000TOCe'},
    
    {name: 'датчик CO2 InFit 761e', label: 'Датчики CO2'},
    {name: 'корпус датчика CO2 InFit 761e', label: 'Корпус датчика CO2'},
    {name: 'датчик электропроводности', label: 'Датчик электропро...'},
  ];
  
  const buttons = buttonsData.map(({name, label}) => {
    
    return (
      <button onClick={() => props.onCountryFilterSelect(name)}
              className={`relative mb-3 flex h-[50px] w-40 px-4 items-center
      justify-center overflow-hidden bg-gray-800 text-white
      shadow-2xl transition-all before:absolute before:h-0 before:w-0
      before:rounded-full before:bg-blue-400 before:duration-500
      before:ease-out hover:shadow-blue-700 hover:before:h-56
      hover:before:w-56 ml-2
      sm:h-[30px]w-20`}
              key={name}
              type="button">
        <span className="relative z-10">{label}</span>
      </button>
    )
  })
  
  return (
    <div className="flex flex-col absolute">
      {buttons}
    </div>
  );
};

ItemFilter.propTypes = {
  onCountryFilterSelect: PropTypes.func
}


export default ItemFilter;