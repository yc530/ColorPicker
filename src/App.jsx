// Write your Color component here
import React from "react";

const Color = ({ color, selectedColor, setSelectedColor }) => {
  const isSelected = color === selectedColor;
  return <div 
  className={`color ${color} ${isSelected ? 'selected' : ''}`} 
  onClick={() => setSelectedColor(color)}></div>
 
};

const App = () => {
  const [selectedColor, setSelectedColor] = React.useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={`color ${selectedColor}`}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="orange" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;

//just to test
