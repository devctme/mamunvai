"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success(`Copy promo ( ${text} )`);
    setcopy(true);
  };

  const [copy, setcopy] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={handleCopy}
        className="text-white cursor-pointer font-semibold p-4 rounded-lg  border-2 border-white transition-all duration-200 ease-in hover:text-sky-400 "
      >
        {copy ? "copy successful" : "Click to Copy"}
      </button>
      <Toaster />
    </div>
  );
};

export default CopyToClipboardButton;
