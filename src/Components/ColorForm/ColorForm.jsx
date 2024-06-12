import ColorInput from "../ColorInput/ColorInput.jsx";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#12345", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(
      event.target
    ); /*Mengumpulkan form data, jika user submit form*/
    const data =
      Object.fromEntries(
        formData
      ); /*Konversi FormData Menjadi Objek JavaScript*/
    onSubmitColor(
      data
    ); /*Fungsi yang mengirimkan data dari form ke suatu tempat */
  }
  return (
    <form className="" onSubmit={handleSubmit}>
      {" "}
      <label htmlFor="role">
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={
            initialData.role
          } /* atribut defaultValue digunakan utk mengatur nilai awal dari input, jadi nilai input menjadi role  */
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
        Contast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <button>Add Color</button>
    </form>
  );
}
