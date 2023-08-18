import React from "react";
import ExperienceDetail from "./ExperienceDetail";

const jobDetails = [
  {
    name: "Nokia Networks",
    startDate: "Aug 2021",
    endDate: "Present",
    location: "Bangalore, India",
    description: [
      "- Developing screens and UI components for the web application using React and Tailwind",
      "- Fixing UI issues and integrating backend APIs with Redux Saga",
    ],
    id: "job1",
  },
];

const educationDetails = [
  {
    name: "Punjab Technical University",
    startDate: "July 2017",
    endDate: "June 2021",
    location: "Chandigarh, India",
    description: ["BTech. Computer Science (8.3 GPA)"],
    id: "ed1",
  },
  {
    name: "DAV Public School",
    startDate: "April 2015",
    endDate: "March 2017",
    location: "Hisar, India",
    description: ["Higher Secondary (8.4 CGPA)"],
    id: "ed2",
  },
];

function Experience() {
  return (
    <React.Fragment>
      <ExperienceDetail details={jobDetails} title="experience"/>
      <ExperienceDetail details={educationDetails} title="education"/>
    </React.Fragment>
  );
}

export default Experience;
