import React, { useState } from "react";
import "./App.css";
import { numbers, operators, specials } from "../src/data.js";
import Numbers from "../src/components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "../src/components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "../src/components/ButtonComponents/SpecialButtons/Specials.js";
import Display from "../src/components/DisplayComponents/Display.js";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [numbersState, setNumbersState] = useState(0);

  return (
    <div className="container">
      <div className="App">
        <Logo />
        <Display
          numbersState={numbersState}
          setNumbersState={setNumbersState}
        />
      </div>
      <div className="btn-container">
        <div className="btn-separator">
          <div className="specials-container">
            <Specials specialsArray={specials} />
          </div>
          <div className="number-container">
            <Numbers numbersArray={numbers} />
          </div>
        </div>

        <div className="btn-separator2">
          <div className="operator-container">
            <Operators operatorsArray={operators} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
