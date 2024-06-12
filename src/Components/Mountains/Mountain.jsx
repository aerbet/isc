import PropTypes from "prop-types";

const Mountain = ({ coffeeSvg, borderColor }) => {
  return (
    <div className="header__coffee flex justify-center items-center">
      <hr className={`${borderColor} w-16`} />
      <img src={coffeeSvg}
           alt="mountain"
           className="pl-5 pr-5 w-[80px] h-[60px]"/>
      <hr className={`${borderColor} w-16`} />
    </div>
  );
};

Mountain.propTypes = {
  coffeeSvg: PropTypes.string,
  borderColor: PropTypes.string
}

export default Mountain;