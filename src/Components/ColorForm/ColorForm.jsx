import ColorInput from "../ColorInput/ColorInput.jsx";
import "./ColorForm.css";

const initialData = {
  role: "",
  hex: "",
  contrastText: "",
};

export default function ColorForm({ onSubmitColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target); // Mengumpulkan form data, jika user submit form
    const data = Object.fromEntries(formData); // Konversi FormData Menjadi Objek JavaScript
    onSubmitColor(data); // Fungsi yang mengirimkan data dari form ke suatu tempat
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
            defaultValue={initialData.role} // atribut defaultValue digunakan utk mengatur nilai awal dari input
            placeholder="Name your favourite color 🎨"
          />
        </label>
        <br />
        <label htmlFor="hex">
          Hex
          <br />
          <ColorInput
            id="hex"
            defaultValue={initialData.hex}
            placeholder="Please select Hex Color 🪄"
          />
        </label>
        <br />
        <label htmlFor="contrastText">
          Contrast Text
          <br />
          <ColorInput
            id="contrastText"
            defaultValue={initialData.contrastText}
            placeholder="Please select Text Color 🔤"
          />
        </label>
        <br />
        <button>Add Color</button>
      </form>
    </div>
  );
}
