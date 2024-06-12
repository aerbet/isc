import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const Card = ({ id, cardImg, cardTitle, cardCountry}) => {
  return (
    <Link to={`/item/${id}`} className="card h-60 w-[335px] mr-12 rounded-md bg-white pt-7 px-8 pb-[300px] cursor-pointer hover:bg-gray-100 ">
      <div className="flex flex-col items-center">
        <div className="flex justify-center pb-2.5">
          <img src={cardImg}
               alt="coffee"
               className="card__img"/>
        </div>
        <div>
          <h4 className="pb-3.5 w-[300px] pt-1 font-bold">{cardTitle}</h4>
          <span className="flex justify-end pt-1.5 pb-1.5 font-medium">{cardCountry}</span>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string,
  cardCountry: PropTypes.string,
  cardPrice: PropTypes.string,
  id: PropTypes
}

export default Card;