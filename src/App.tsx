import React, { useEffect, useState } from 'react';
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

  const [readyForCalculation, setReadyForCalculation] =
    useState<boolean>(false);

  function isValid() {
    setReadyForCalculation(
      selectedBrewMethod.brewMethod.length > 0 && desiredOunces > 0
    );
  }
  useEffect(() => {
    isValid();
  }, [selectedBrewMethod, desiredOunces]);

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
    <div className="App p-20">
      <h1 className="text-3xl font-bold underline">Coffee Calculator</h1>
      <p className="text-xl font-medium">quick and easy brewing calculations</p>
      <hr className="max-w-xs	mx-auto my-5" />

      {/* View that displays calculation inputs */}
      {view === 'calculation' && (
        <div className="calculation-view">
          <div className="flex justify-center flex-col max-w-xl m-auto">
            {/* brew selection - dropdown selection */}
            <div className="p-8">
              <Dropdown setSelectedBrewMethod={setSelectedBrewMethod} />
            </div>

            {/* desired coffee amount in ounces  */}
            {selectedBrewMethod.brewMethod.length > 0 && (
              <div className="p-8">
                <Input setDesiredOunces={setDesiredOunces} />
              </div>
            )}

            {/* Calculate appears when method and amount has been selected */}
            {readyForCalculation && (
              <div className="p-8">
                <button
                  className="border rounded px-2 py-1 hover:bg-indigo-600 hover:text-white"
                  onClick={handleOnClick}
                >
                  Calculate
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* View that displays the final calculation */}
      {view === 'calculated' && (
        <div className="calculated-view text-left max-w-lg m-auto">
          <h3 className="pt-5 pb-3">
            For your {selectedBrewMethod.brewMethod}, you will need:
          </h3>
          <ul className="text-left">
            <li className="py-2">
              coffee ground at a{' '}
              <span className="font-bold">{selectedBrewMethod.grind}</span>{' '}
              setting
            </li>
            <li className="py-2">
              {' '}
              <span className="font-bold">{coffeeAmount} grams</span> of coffee{' '}
            </li>
            <li className="py-2">
              to make <span className="font-bold">{desiredOunces}oz </span>{' '}
              using the {selectedBrewMethod.brewMethod} method
            </li>
          </ul>
          <div className="mx-auto text-center">
            <button
              className="border rounded px-2 py-1 my-10 hover:bg-indigo-600 hover:text-white "
              onClick={handleNewCalculation}
            >
              New Calculation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
