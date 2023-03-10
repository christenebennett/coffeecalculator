import React from 'react';
import './App.css';
import Dropdown from './components/atoms/Dropdown';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Coffee Calculator</h1>
      <h2 className="text-xl font-medium">
        quick and easy brewing calculations
      </h2>
      <div className="grid grid-cols-16 md:grid-cols-6">
        {/* brew selection - dropdown selection */}
        <div>
          <h3>Select Brew Style</h3>
          <Dropdown />
        </div>
        {/* ounces (or servings) */}
        <div>
          <h3>Select ounces</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
