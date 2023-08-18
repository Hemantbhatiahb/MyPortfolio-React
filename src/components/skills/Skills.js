import React from "react";

import SkillDetail from "./SkillDetail";

const skills = [
  { name: "HTML", id: "sk1", level: 9 },
  { name: "CSS", id: "sk2", level: 9 },
  { name: "React", id: "sk3", level: 9 },
  { name: "Javascript", id: "sk4", level: 9 },
  { name: "Java", id: "sk5", level: 9 },
  { name: "Firebase", id: "sk6", level: 9 },
  { name: "TypeScript", id: "sk7", level: 9 },
  { name: "Redux", id: "sk8", level: 9 },
  { name: "C++", id: "sk9", level: 9 },
];

const otherSkills = [
  { name: "PostMan", id: "osk1" },
  { name: "TailWind", id: "osk2" },
  { name: "Rest API", id: "osk3" },
  { name: "VS Code", id: "osk4" },
  { name: "Windows", id: "osk5" },
  { name: "Git", id: "osk6" },
];

function Skills() {
  return (
    <section className="lg:mt-12 mt-10 flex gap-10 flex-col">
      <div className="flex">
        <div>
          <h3 className="text-3xl py-1 dark:text-white font-semibold">
            Skills
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 ">
            Technical skills that I have acquired over the course of time along
            with some other technologies that I have worked on.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-6 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <SkillDetail
            name={skill.name}
            id={skill.id}
            level={skill.level}
            key={skill.id}
          />
        ))}
      </div>

      {/* <div className="my-12">
        <h3 className="text-3xl  py-2 dark:text-white font-semibold">
          Other Technologies
        </h3>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-6 max-w-3xl mx-auto">
          {otherSkills.map((skill) => (
            <SkillDetail name={skill.name} id={skill.id} key={skill.id} />
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default Skills;
