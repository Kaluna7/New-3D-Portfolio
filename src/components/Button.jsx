export function Button({ label, link }) {
  return (
    <a 
      href={link}
      className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600"
    >
      {label}
    </a>
  );
}


import { useState } from "react";

export function ButtonAbout({ image }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 200); 
  };

  return (
    <button
      onClick={handleClick}
      className={`h-fit w-fit cursor-pointer transition-opacity duration-500 ${
        clicked ? "opacity-0" : "opacity-100"
      }`}
    >
      <img src={image} alt="Button Icon" className="w-[5rem] h-[5rem]" />
    </button>
  );
}

