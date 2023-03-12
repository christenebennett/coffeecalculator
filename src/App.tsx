import React, { useState } from 'react';
import './App.css';
import { CoffeeDataProps } from './coffeeData';
import Dropdown from './components/atoms/Dropdown';
import Input from './components/atoms/Input';

import './index.css';
import { ouncesToMl } from './utils/calculations';

function App() {
  const [selectedBrewMethod, setSelectedBrewMethod] = useState<CoffeeDataProps>(
    {
      brewMethod: '',
      ratio: '',
      grind: '',
      instructions: ''
    }
  );
  const [desiredOunces, setDesiredOunces] = useState<number>(0);
  const [coffeeAmount, setCoffeeAmount] = useState<number>();
  const [view, setView] = useState<string>('calculation');

  function handleOnClick() {
    // grab the ounces from state and convert ounces to milliliters
    const amountInMl = ouncesToMl(desiredOunces);

    // grab ratio for calculation
    const ratioParts = selectedBrewMethod?.ratio.split(':');
    const ratio = parseInt(ratioParts[1]);

    // divide milliliters of water by ratio
    const coffeeRequired = Math.ceil(amountInMl / ratio);
    setCoffeeAmount(coffeeRequired);
    setView('calculated');
  }

  function handleNewCalculation() {
    setSelectedBrewMethod({
      brewMethod: '',
      ratio: '',
      grind: '',
      instructions: ''
    });
    setDesiredOunces(0);
    setCoffeeAmount(0);
    setView('calculation');
  }
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Coffee Calculator</h1>
      <h2 className="text-xl font-medium">
        quick and easy brewing calculations
      </h2>
      {view === 'calculation' && (
        <div className="calculation-view">
          <div className="grid grid-cols-16 md:grid-cols-6">
            {/* brew selection - dropdown selection */}
            <div>
              <Dropdown setSelectedBrewMethod={setSelectedBrewMethod} />
            </div>

            {/* desired coffee amount in ounces  */}
            {selectedBrewMethod && (
              <div>
                <Input setDesiredOunces={setDesiredOunces} />
              </div>
            )}

            {/* Calculate appears when method and amount has been selected */}
            <div>
              <button className="border" onClick={handleOnClick}>
                Calculate
              </button>
            </div>
          </div>
        </div>
      )}
      {view === 'calculated' && (
        <div className="calculated-view">
          For {selectedBrewMethod.brewMethod}, you will need:
          <ul>
            <li>coffee ground at a {selectedBrewMethod.grind} setting</li>
            <li>{coffeeAmount} grams of coffee </li>
            <li>
              to make {desiredOunces}oz of {selectedBrewMethod.brewMethod}
            </li>
          </ul>
          <div>
            <button className="border" onClick={handleNewCalculation}>
              New Calculation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
