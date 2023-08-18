import React, { useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
// import Icons from "./assets/images/code.png";

const imageMap = {
  sk1: "/../../assets/icons/html.png",
  sk2: "../../assets/icons/css-logo.png",
  sk3: "../../assets/icons/react.svg",
  sk4: "../../assets/icons/javascript.png",
  sk5: "../../assets/icons/java.svg",
  sk6: "../../assets/icons/firebase.svg",
  sk7: "../../assets/icons/typescript.png",
  sk8: "../../assets/icons/redux.svg",
  sk9: "../../assets/icons/c.svg",
};

// console.log(Icons);

function SkillDetail({ id, name, level }) {
  const [isFlip, setIsFlipped] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  console.log(imageMap[id])
  const cardFlipHandler = () => {
    setIsFlipped((prevValue) => !prevValue);
  };

  useEffect(() => {
    const loadImage = () => {
      // import("../../assets/icons/html.png").then((img) => setImageSrc(img));
    };
    loadImage();
  }, []);

  return (
    <ReactCardFlip isFlipped={isFlip} flipDirection="vertical">
      <div
        onMouseEnter={cardFlipHandler}
        className="p-3 rounded-xl shadow-lg w-32 h-32 flex justify-center items-center dark:bg-slate-700 dark:shadow-slate-700 dark:shadow-md"
      >
        <img
          src="../../assets/icons/html.png"
          className="w-16 h-16 object-cover object-center"
          alt="html logo"
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
