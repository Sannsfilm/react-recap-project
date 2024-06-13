import { useState } from "react";
import { uid } from "uid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import "./App.css";

export default function App() {
  const [colors, setColors] =
    useState(
      initialColors
    ); /*setColors a/ fungsi untuk memperbarui state colors.*/

  function handleAddColor(newColor) {
    setColors([
      { id: uid(), ...newColor },
      ...colors,
    ]); /*setiap warna baru harus mempunyai id unik(uid) */
  }

  return (
    <>
      <h1 className="app-container">Theme Creator ✨</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
        /> /* memberikan informasi dalam props */
      ))}
    </>
  );
}

/*fungsi color form, di mana onSubmitColor bertanggung jawab untuk menghandleAddColor yang baru ditambahkan oleh user*/
