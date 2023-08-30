import React from "react";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import FadeIn from "react-fade-in/lib/FadeIn";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <FadeIn transitionDuration={800}>
        <div className="loading-screen bg-white flex justify-center items-center h-full w-full">
          <TypeAnimation
            sequence={["", 2000, "Isaac Heslop.", 2000, "Portfolio.", 2000]}
            wrapper="p"
            className={`${styles.heroSubText} text-french`}
            speed={50}
            repeat={0}
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default LoadingScreen;
