import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { elevation } from "../assets";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-10 h-[100vh] w-full">
        <img
          src={elevation}
          alt="Elevation"
          className="w-full h-full sm:block hidden object-cover max-w-full"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero-mobile bg-hero overflow-hidden"
      >
        <div
          className={`absolute inset-0  ${styles.paddingX} bottom-[15%] 
            max-w-7xl mx-auto flex flex-col items-center justify-end gap-3 z-20`}
        >
          <TypeAnimation
            sequence={["Isaac Heslop"]}
            wrapper="h1"
            className={`${styles.heroHeadText} text-black font-gothic`}
            speed={50}
            repeat={0}
          />
          <TypeAnimation
            sequence={["", 4000, "software engineer and architect.", 3000]}
            wrapper="p"
            className={`${styles.heroSubText} text-eerieBlack`}
            speed={50}
            repeat={0}
          />
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
          <a href="#about">
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <polygon points="12 17.586 4.707 10.293 3.293 11.707 12 20.414 20.707 11.707 19.293 10.293 12 17.586" />
                    <polygon points="20.707 5.707 19.293 4.293 12 11.586 4.707 4.293 3.293 5.707 12 14.414 20.707 5.707" />
                  </g>
                </svg>
              </motion.div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
