import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbFileTypeCss } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-8xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbFileTypeCss className="text-8xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-8xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJs className="text-8xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-8xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaLaravel className="text-8xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineDotNet className="text-8xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMsqlServer className="text-8xl text-red-400" />
        </motion.div>
      </motion.div>

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl"
      >
        Tools
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <VscVscode className="text-8xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-8xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-8xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCanva className="text-8xl text-cyan-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
