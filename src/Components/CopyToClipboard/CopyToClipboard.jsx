import { useEffect, useState } from "react";

const CopyToClipboard = ({ hexCode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hexCode);
      setCopied(true); // true or succesfull after succesful copy
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  useEffect(() => {
    if (copied) {
      const timeOut = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => clearTimeout(timeOut); // Cleanup function to clear timeout
    }
  }, [copied]); //dependencies array, that remembering that useEffect would work only in copied state

  return (
    <div>
      <button onClick={copyToClipboard}>Copy</button>
      {copied && <p>Succesfully Copied!</p>}
    </div>
  );
};

export default CopyToClipboard;
