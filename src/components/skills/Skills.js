import React from "react";

import SkillDetail from "./SkillDetail";

const skills = [
  { name: "HTML", id: "sk1", level: 9  , fileName:'html.png'},
  { name: "CSS", id: "sk2", level: 8  , fileName:'css-logo.png'},
  { name: "React", id: "sk3", level: 8  , fileName:'react.svg'},
  { name: "Javascript", id: "sk4", level: 8 , fileName:'javascript.png' },
  { name: "Java", id: "sk5", level: 8  , fileName:'java.svg'},
  { name: "Firebase", id: "sk6", level: 7  , fileName:'firebase.svg'},
  { name: "TypeScript", id: "sk7", level: 7  , fileName:'typescript.png'},
  { name: "Redux", id: "sk8", level: 8  , fileName:'redux.svg'},
  { name: "C++", id: "sk9", level: 8 , fileName:'c.svg' },
];

const otherSkills = [
  { name: "PostMan", id: "os1", fileName:'postman.svg' },
  { name: "TailWind", id: "os2", fileName:'tailwind.svg' },
  { name: "Rest API", id: "os3", fileName:'restapi.svg' },
  { name: "VS Code", id: "os4" , fileName:'vscode.svg'},
  { name: "Windows", id: "os5", fileName:'windows.svg' },
  { name: "Git", id: "os6", fileName:'git.svg' },
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

      <div className="my-12">
        <h3 className="text-3xl  py-2 dark:text-white font-semibold">
          Other Technologies
        </h3>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-6 max-w-3xl mx-auto">
          {otherSkills.map((skill) => (
            <SkillDetail name={skill.name} id={skill.id} key={skill.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
