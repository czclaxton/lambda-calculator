import React from "react";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operator-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      props.operatorsArray.map(x => {
        return (
          <OperatorButton
            operatorText={x.value}
            numbersState={props.numbersState}
            setNumbersState={props.setNumbersState}
          />
        );
      })}
    </div>
  );
};

export default Operators;
