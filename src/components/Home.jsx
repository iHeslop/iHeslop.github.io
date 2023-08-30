import { elevation } from "../assets";
import { styles } from "../styles";

const Home = () => {
  return (
    <div className="absolute bottom-0">
      <section className="relative w-full h-full overflow-hidden flex flex-row bottom-[80px] left-6 ">
        <img
          src={elevation}
          alt="Elevation"
          loading="lazy"
          className={
            "w-full h-full sm:block hidden object-cover max-w-full z-9 fade-in-animation"
          }
        />
      </section>
      <section className="relative h-full mx-1">
        <h2
          className={`${styles.sectionSubTextLight} absolute w-[28rem] right-10 text-right bottom-10 fade-in-animation`}
        >
          Born in 1998 in Sydney, Australia. I am passionate about Software
          Design and Architecture. I endeavour to utilize creative problem
          solving and design skills to create meaningful and impactful design. I
          am constantly learning and striving to better my knowledge and
          understanding.
        </h2>
      </section>
    </div>
  );
};

export default Home;
