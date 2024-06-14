import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  const [isConfirming, setIsConfirming] = useState(false);

  function toggleDelete() {
    setIsConfirming(!isConfirming);
  }

  function confirmDelete() {
    onDeleteColor(color.id);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {/* if false */}

      {!isConfirming && <button onClick={toggleDelete}>DELETE</button>}

      {/* if true */}

      {isConfirming && (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button className="color-question-name" onClick={toggleDelete}>
            CANCEL
          </button>
          <button className="color-question-name" onClick={confirmDelete}>
            DELETE
          </button>
        </>
      )}
    </div>
  );
}
