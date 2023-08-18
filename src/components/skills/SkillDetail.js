import React from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const getSkillsImagePath = (id) => {
  switch (id) {
    case "sk1":
      return "html.png";
    case "sk2":
      return "css-logo.png";
    case "sk3":
      return "react.svg";
    case "sk4":
      return "javascript.png";
    case "sk5":
      return "java.svg";
    case "sk6":
      return "firebase.svg";
    case "sk7":
      return "typescript.png";
    case "sk8":
      return "redux.svg";
    case "sk9":
      return "c.svg";
    default:
      return "";
  }
};

const getOtherSkillsImagePath = (id) => {
  switch (id) {
    case "os1":
      return "postman.svg";
    case "os2":
      return "tailwind.svg";
    case "os3":
      return "restapi.svg";
    case "os4":
      return "vscode.svg";
    case "os5":
      return "windows.svg";
    case "os6":
      return "git.svg";
    default:
      return "";
  }
};

function SkillDetail({ id, name, level }) {
  const [isFlip, setIsFlipped] = useState(false);
  const cardFlipHandler = () => {
    setIsFlipped((prevValue) => !prevValue);
  };

  const imagevalue = id.includes('sk') ? getSkillsImagePath(id) : getOtherSkillsImagePath(id);

  return (
    <ReactCardFlip isFlipped={isFlip} flipDirection="vertical">
      <div
        onMouseEnter={cardFlipHandler}
        className="p-3 rounded-xl shadow-lg w-32 h-32 flex justify-center items-center dark:bg-slate-700 dark:shadow-slate-700 dark:shadow-md"
      >
        <img
          src={`/images/${imagevalue}`}
          className="w-16 h-16 object-cover object-center"
          alt="logo"
        />
      </div>
      <div
        onMouseLeave={cardFlipHandler}
        className="p-3 rounded-xl shadow-lg w-32 h-32  dark:bg-slate-700 dark:shadow-slate-700 dark:shadow-md"
      >
        <div className="h-full flex flex-col justify-around items-center ">
          <h2 className="text-xl font-normal dark:text-white">{name}</h2>
          {level && (
            <p className="text-3xl font-extralight dark:text-gray-300">
              {level}
            </p>
          )}
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default SkillDetail;
