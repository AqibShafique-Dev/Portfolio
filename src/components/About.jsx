import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import Resume from "../assets/Resume/Aqib_Resume.pdf";
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-5xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
          style={{ marginTop: "-50px" }}
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="aboutImg" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg;justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
          <a
            type="btn"
            href={Resume}
            download
            className="bg-purple-900 hover:bg-purple-800 text-white mx-5 my-5 py-2 px-4 rounded-full cursor-pointer"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
