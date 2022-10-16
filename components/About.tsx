import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/Sf2kvC3/pp-2.jpg"
      ></motion.img>
    </div>
  );
}

export default About;

//<a href="https://ibb.co/BnmhsMC"><img src="https://i.ibb.co/Sf2kvC3/pp-2.jpg" alt="pp-2" border="0"></a>
