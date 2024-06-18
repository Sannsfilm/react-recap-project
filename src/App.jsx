import { useState } from "react";
import { uid } from "uid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import "./App.css";

export default function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(id) {
    const ColorsToKeep = colors.filter((color) => {
      return color.id !== id;
    });
    setColors(ColorsToKeep);
  }

  function handleUpdateColor(updatedColor) {
    const updatedColors = colors.map((color) =>
      color.id === updatedColor.id ? updatedColor : color
    );
    setColors(updatedColors);
  }

  return (
    <>
      <h1 className="app-container">Theme Creator ✨</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length === 0 ? (
        <p>No colors available. Please add new colors!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onUpdateColor={handleUpdateColor}
          />
        ))
      )}
    </>
  );
}
