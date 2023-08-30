import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      position="left"
      contentStyle={{
        background: "#eaeaec",
        color: "#292929",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        marginBottom: "5em",
      }}
      contentArrowStyle={{
        borderRight: "10px solid  #232631",
      }}
      date={
        <div>
          <h3 className="text-dim text-[18px] font-neuelight">
            {experience.date}
          </h3>
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[22px] font-neueregular tracking-wider">
          {experience.title}
        </h3>
        <p
          className="text-[24px] text-taupe font-neueregular tracking-wider"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p className="font-neuelight tracking-wider" style={{ margin: 0 }}>
          {experience.description}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
      <div className="bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
        <motion.div
          className="-mt-7 flex relative -mr-[1000px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <VerticalTimeline
            className="vertical-timeline-custom-line overflow-y-scroll top-0 bottom-0 h-[100vh] absolute"
            lineColor="grey"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.6 }}
              >
                <ExperienceCard key={index} experience={experience} />
              </motion.div>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
