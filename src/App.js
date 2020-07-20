import React from 'react';
import * as ColorFunctions from './ColorFunctions';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Monochromatic Swatch
        {ColorFunctions.renderColorSwatch(ColorFunctions.getMonochromeColors)}
        <br />
        Complement Color Swatch
        {ColorFunctions.renderColorSwatch(ColorFunctions.getComplementColor)}
        <br />
        Split Complement Colors Swatch
        {ColorFunctions.renderColorSwatch(ColorFunctions.getSplitComplementColor)}
        <br />
        Triadic Colors Swatch
        {ColorFunctions.renderColorSwatch(ColorFunctions.getTriadicColor)}
        <br />
        Tetradic Colors Swatch
        {ColorFunctions.renderColorSwatch(ColorFunctions.getTetradicColor)}
        <br />
        Analogous Colors Swatch
        {ColorFunctions.renderColorSwatch(ColorFunctions.getAnalogousColor)}
      </header>
    </div>
  );
}

export default App;
