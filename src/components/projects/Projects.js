import React from "react";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="lg:mt-12 mt-10 flex gap-10 flex-col">
      <div className="flex">
        <div>
          <h3 className="text-3xl py-1 dark:text-white font-semibold">
            Projects
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 ">
            An epitome of the skills I posess. Include a few work and personal
            projects. ( Code and Live not available for work projects )
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 ">
        <article className="flex flex-col justify-between mx-auto w-md max-w-md p-4 rounded-xl overflow-hidden shadow-xl dark:shadow-slate-700 mb-10 dark:bg-slate-700 dark:shadow-md hover:translate-y-1">
          <main className="space-y-6">
            <div className="">
              <img
                src={project1}
                className="w-full h-50 md:h-full md:w-50 md:w rounded-xl shadow-xl"
                alt="project 1"
                loading="lazy"
              />
            </div>

            <div className="mt-3">
              <h2 className="text-2xl my-2 font-semibold  dark:text-white ">
                Fitness App
              </h2>
              <div class="flex gap-[6px] ">
                <span class="bg-fuchsia-400 inline-block rounded-md px-2 py-1 text-xs font-semibold">
                  React
                </span>
                <span class="bg-lime-400  inline-block rounded-md px-2 py-1 text-xs font-semibold">
                  Material-UI
                </span>
                <span class="bg-sky-400 inline-block rounded-md px-2 py-1 text-xs font-semibold">
                  Redux
                </span>
                <span class="bg-violet-400 inline-block rounded-md px-2 py-1 text-xs font-semibold">
                  Exercisedb Api
                </span>
              </div>
              <p className="text-[14px] mt-6 text-gray-700 dark:text-gray-200  mx-auto md:text-base leading-7">
                A webapp to discover a wide range of exercises for various body
                parts allowing users to easily find exercises using a search or
                filter them by body parts.
              </p>
            </div>
          </main>
          <div className="flex items-center gap-6 mt-16 transition delay-1000">
            <Link
              to="https://github.com/Hemantbhatiahb/project_fitness_app"
              target="_blank"
              className="cursor-pointer"
            >
              <BsGithub className="w-8 h-8 dark:text-white hover:opacity-80" />
            </Link>

            <button className="basis-full bg-slate-100 rounded-xl text-lg cursor-pointer px-2 py-2 font-semibold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-500 dark:bg-slate-800 dark:text-white">
              <a
                href="https://fitness-club2023.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live View
              </a>
            </button>
          </div>
        </article>

        <article className="flex flex-col justify-between mx-auto w-md max-w-md p-4 rounded-xl overflow-hidden shadow-xl dark:shadow-slate-700 mb-10 dark:bg-slate-700 dark:shadow-md hover:translate-y-1">
          <main className="space-y-6">
            <div className="">
              <img
                src={project2}
                className="w-full h-50 md:h-full md:w-50 md:w rounded-xl shadow-xl"
                alt="project 1"
                loading="lazy"
              />
            </div>

            <div className="mt-3">
              <h2 className="text-2xl my-2 font-semibold  dark:text-white ">
                Fitness App
              </h2>
              <div class="flex gap-[6px] ">
                <span class="bg-fuchsia-400 inline-block rounded-md px-2 py-1 text-xs font-semibold">
                  React
                </span>
                <span class="bg-lime-400  inline-block rounded-md px-2 py-1 text-xs font-semibold">
                  Firebase
                </span>
                <span class="bg-sky-400 inline-block rounded-md px-2 py-1 text-xs font-semibold">
                  Sass
                </span>
              </div>
              <p className="text-[14px] mt-6 text-gray-700 dark:text-gray-200  mx-auto md:text-base leading-7">
                A chat application that brings people closer through seamless
                communication offers a secure and engaging platform for users to
                connect, chat, and share moments.
              </p>
            </div>
          </main>
          <div className="flex items-center gap-6 mt-16 transition delay-1000">
            <Link
              to="https://github.com/Hemantbhatiahb/ChatApp"
              target="_blank"
              className="cursor-pointer"
            >
              <BsGithub className="w-8 h-8 dark:text-white hover:opacity-80" />
            </Link>

            <button className="basis-full bg-slate-100 rounded-xl text-lg cursor-pointer px-2 py-2 font-semibold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-500 dark:bg-slate-800 dark:text-white">
              <a
                href="https://webchat-app-2023.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live View
              </a>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
