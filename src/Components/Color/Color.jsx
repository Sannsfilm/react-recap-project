import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function toggleDelete() {
    setIsConfirming(!isConfirming);
  }

  function confirmDelete() {
    onDeleteColor(color.id);
  }

  function toggleIsEditing() {
    setIsEditing(!isEditing);
  }

  function updateColor(newColor) {
    onUpdateColor({ ...color, ...newColor });
    toggleIsEditing();
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
      <CopyToClipboard hexCode={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {/* if true */}

      {!isConfirming && <button onClick={toggleDelete}>DELETE</button>}
      {!isEditing && <button onClick={toggleIsEditing}>EDIT</button>}

      {/* if false */}

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

      {isEditing && (
        <>
          <ColorForm
            color={color}
            onSave={updateColor}
            buttonText="UPDATE COLOR"
          />
          <button onClick={toggleIsEditing}>CANCEL</button>
        </>
      )}
    </div>
  );
}
