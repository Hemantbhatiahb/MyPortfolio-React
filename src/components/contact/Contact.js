import React from "react";

function Contact() {
  return (
    <React.Fragment>
      <section className="lg:mt-12 py-10  gap-10">
        <div className="flex mb-12">
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-semibold">
              Contact Me
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 ">
              Like my work or just want to talk. Below is the form by which you
              can contact me.
            </p>
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto p-4 rounded-xl shadow-xl dark:bg-slate-700">
          <form action="https://formspree.io/f/xpzgpvwz" method="POST" target="_blank">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2 dark:text-white"
                  for="fName"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="fName"
                  name="username"
                  type="text"
                  placeholder="Jane"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2 dark:text-white "
                  for="email"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2 dark:text-white"
                  for="message"
                  name="message"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center ">
              <div className="md:w-1/3">
                <button
                  type="submit"
                  className="shadow bg-gradient-to-r from-cyan-400 to-teal-400 focus:shadow-outline hover:scale-110 transition delay-100 focus:outline-none text-white text-md font-bold py-2 px-5 rounded"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
