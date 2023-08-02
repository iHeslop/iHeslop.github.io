import React from "react";
import { Puff } from "react-loading-icons";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { logo } from "../assets";

const LoadingScreen = () => {
  return (
    <div className="loading-screen bg-white flex flex-col justify-center items-center h-screen w-screen fixed top-0 left-0">
      <Puff
        stroke="#000000"
        strokeOpacity={0.25}
        speed={1}
        className="absolute"
      />
      <img
        src={logo}
        alt="logo"
        className="w-[60px] h-[40px] object-contain absolute bottom-10"
      />
    </div>
  );
};

export default LoadingScreen;
