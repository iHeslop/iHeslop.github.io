import React, { useState, useEffect } from "react";

const LoadingAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <div className={`loading-screen ${isLoaded ? "fade-out" : ""}`}>
      {!isLoaded && (
        <div className="bg-white flex justify-center items-center h-full w-full" />
      )}
    </div>
  );
};

export default LoadingAnimation;
