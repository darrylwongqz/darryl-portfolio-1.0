import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/QpNpbjN/alta-logo.jpg"
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10 max-h-96">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="mt-1 text-2xl font-bold">Alta Group</p>

        <div className="flex my-2 space-x-2">
          <Image
            src="https://i.ibb.co/vjKjmjR/313-3133777-javascript-transparent-background-svg-hd-png-download.png"
            alt="tech-logo"
            height="40"
            width="40"
            className="rounded-full"
          />
        </div>

        <p className="py-5 text-gray-300 uppercase">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg overflow-hidden overflow-y-scroll max-h-48 md:max-h-80 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points Summary points Summary points
            Summary points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points Summary points Summary points
            Summary points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points Summary points Summary points
            Summary points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points Summary points Summary points
            Summary points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points Summary points Summary points
            Summary points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points Summary points Summary points
            Summary points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points Summary points Summary points
            Summary points Summary points{' '}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
