import ColorInput from "../ColorInput/ColorInput.jsx";
import "./ColorForm.css";

const initialData = {
  role: "Name your favourite color 🎨",
  hex: "#123456",
  contrastText: "#ffffff",
};

export default function ColorForm({ onSubmitColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target); //Collect form data, if the user submits the form
    const data = Object.fromEntries(formData); // Convert FormData Into JavaScript Objects
    onSubmitColor(data);
  }

  return (
    <div className="form-container ">
      <form className="colorForm-Card" onSubmit={handleSubmit}>
        <label htmlFor="role">
          Role
          <br />
          <input
            type="text"
            id="role"
            name="role"
            defaultValue={initialData.role}
          />
        </label>
        <br />
        <label htmlFor="hex">
          Hex
          <br />
          <ColorInput id="hex" defaultValue={initialData.hex} />
        </label>
        <br />
        <label htmlFor="contrastText">
          Contrast Text
          <br />
          <ColorInput
            id="contrastText"
            defaultValue={initialData.contrastText}
          />
        </label>
        <br />
        <button>Add Color</button>
      </form>
    </div>
  );
}
