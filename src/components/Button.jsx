export function Button({ label, link }) {
  return (
    <a 
      href={link}
      className="p-2 bg-yellow-300 text-black border-2 border-black font-semibold
                 shadow-[4px_4px_0_#000] transition-transform hover:translate-y-0.5 rounded-tr-md"
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

