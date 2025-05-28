import PropTypes from "prop-types";

// Fungtional Komponen
function Car(brand = "Suzuki", type) {
  return (
    <h2>
      I am {brand} have {type}
    </h2>
  );
}

// Proptype
Car.propTypes = {
  brand: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Car;
