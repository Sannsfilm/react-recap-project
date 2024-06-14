import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  const [isConfirming, setIsConfirming] = useState(false);

  // set the user still in state doesn't confirm anything

  function handleDelete() {
    setIsConfirming(true);
  }

  // start confirming so it is true

  function cancelDelete() {
    setIsConfirming(false);
  }

  // the same state like first time

  function confirmDelete() {
    onDeleteColor(color.id);
  }

  // call function onDeleteColor to delete

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {isConfirming ? ( // if true
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button onClick={cancelDelete}>CANCEL</button>
          <button onClick={confirmDelete}>DELETE</button>
        </>
      ) : (
        // if false
        <button onClick={handleDelete}>DELETE</button>
      )}
    </div>
  );
}
