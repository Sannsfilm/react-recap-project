import { useState } from "react";

export default function ColorInput({ id, defaultValue, placeholder }) {
  const [inputValue, setInputValue] = useState(defaultValue); // nilai ini diatur sesuai dengan nilai default yang diteruskan melalui properti defaultValue

  function handleInputValue(event) {
    setInputValue(event.target.value); // fungsi untuk menangani perubahan nilai dalam input
  }

  return (
    <>
      <input
        type="text"
        id={id} // id di sini memberikan identitas unik untuk elemen input ini
        name={id}
        value={inputValue} // nilai state yang akan digunakan oleh input
        onChange={handleInputValue} // Properti onChange diatur sebagai fungsi handleInputValue
        placeholder={placeholder}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
