import React, { useState } from "react";
import Navbar from "./Navbar";

const ContentWrapper = ({ children }) => {
  const [randomColour, setRandomColour] = useState(["#808080", "#FFFFFF"]);

  const generateRandomColour = () => {
    const colour1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const colour2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomColour([colour1, colour2]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-[94vw] h-[97vh] sm:h-[90vh] overflow-hidden relative z-1 shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.1)] fade-in-animation">
        <Navbar generateRandomColour={generateRandomColour} />
        {children}
        <div
          className=" absolute h-[27%] w-[4px] sm:w-[6px] left-2 sm:left-4 top-7 sm:top-8 transform opacity-20 rounded-md"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${randomColour[0]}, ${randomColour[1]})`,
          }}
        />
      </div>
    </div>
  );
};

export default ContentWrapper;
