import ColorInput from "../ColorInput/ColorInput.jsx";
import "./ColorForm.css";

const initialData = {
  role: "Name your favourite color 🎨",
  hex: "#123456",
  contrastText: "#ffffff",
};

export default function ColorForm({
  onSubmitColor,
  color = initialData,
  onSave,
  onCancel,
  buttonText = "Add Color",
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (onSubmitColor) {
      onSubmitColor(data);
    } else if (onSave) {
      onSave(data);
    }
  }

  return (
    <div className="form-container">
      <form className="colorForm-Card" onSubmit={handleSubmit}>
        <label htmlFor="role">
          Role
          <br />
          <input type="text" id="role" name="role" defaultValue={color.role} />
        </label>
        <br />
        <label htmlFor="hex">
          Hex
          <br />
          <ColorInput id="hex" defaultValue={color.hex} />
        </label>
        <br />
        <label htmlFor="contrastText">
          Contrast Text
          <br />
          <ColorInput id="contrastText" defaultValue={color.contrastText} />
        </label>
        <br />
        <button type="submit">{buttonText}</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
