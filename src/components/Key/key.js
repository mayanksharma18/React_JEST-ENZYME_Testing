import React from "react";
import PropTypes from "prop-types";

const KeyComponent = ({ callOperator, numbers, operators, setOperator, updateDisplay }) => {
  return <div className="keypad-container" />;
};

KeyComponent.propTypes = {
    callOperator: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired,
  }
  
  

export default KeyComponent;
