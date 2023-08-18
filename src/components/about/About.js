import React from "react";
import { BsGit, BsLinkedin,BsTwitter } from "react-icons/bs";
import devhb from "../../assets/images/dev-hb-wave.png";
function About() {
  return (
    <div className="text-center p-10 lg:mt-12 lg:flex  lg:p-0 lg:items-center lg:justify-center">
      <div>
        <h2 className="text-4xl font-medium text-teal-600 py-2 md:text-5xl dark:text-teal-400">
          Hemant Bhatia
        </h2>
        <h3 className="text-xl  py-2 md:text-2xl dark:text-white">
          Frontend Developer
        </h3>
        <p className="text-medium text-gray-600 dark:text-gray-200 leading-8 py-4 max-w-2xl mx-auto md:text-lg ">
          An adaptable self learning professional who specializes in building
          scalable and performant web applications, writing efficient,
          modularized and comprehensible code and building highly responsive and
          elegant UI.
        </p>
        <div className="flex gap-16 justify-center text-4xl items-center py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/hemantb1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="hover:translate-y-1 hover:text-black dark:hover:text-gray-300"/>
          </a>
          <a
            href="https://github.com/Hemantbhatiahb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGit className="hover:translate-y-1 hover:text-black dark:hover:text-gray-300"/>
          </a>
          <a
            href="https://twitter.com/hemantb5496"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter className="text-4xl hover:translate-y-1 hover:text-black dark:hover:text-gray-300" />
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-80 h-80 mt-20 bg-gradient-to-b overflow-hidden from-teal-500 rounded-full lg:mt-0 shrink-0">
        <img
          src={devhb}
          className="w-[100%] h-[100%] object-cover object-center"
          alt="user 3d"
        />
      </div>
    </div>
  );
}

export default About;
