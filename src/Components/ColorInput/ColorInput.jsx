import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] =
    useState(
      defaultValue
    ); /* , nilai ini diatur sesuai dengan nilai default yang diteruskan melalui properti defaultValue */

  function handleInputValue(event) {
    /* fungsi untuk menangani perubahan nilai dalam input */
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={
          id
        } /* id di sini memberikan identitas unik untuk elemen input ini, yang bermanfaat untuk tujuan aksesibilitas dan styling */
        name={id}
        value={inputValue} /*nilai state yang akan digunakan oleh input*/
        onChange={
          handleInputValue
        } /*Properti onChange diatur sebagai fungsi handleInputValue, yang akan dipanggil setiap kali nilai input berubah. */
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
