import React from "react";

function ExperienceDetail(props) {
  return (
    <section className="flex  items-start justify-between flex-col sm:flex-row dark:text-white  mx-auto">
      <h2 className="w-[17rem] mt-16  uppercase text-xl  font-semibold">{props.title}</h2>
      <div className="w-full">
        {props.details.map((item) => (
          <div className="my-16" key={item.id}>
            <div className="flex justify-between items-center flex-wrap">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm dark:text-gray-300">
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <p className="text-base mt-2 bg-gradient-to-r from-cyan-500 to-teal-500  text-transparent bg-clip-text">{item.location}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {item.description.map((item) => (
                <li className="dark:text-gray  max-w-3xl" key={Math.random().toString()}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceDetail;
