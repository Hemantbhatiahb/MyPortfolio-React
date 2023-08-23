import React from "react";
import ExperienceDetail from "./ExperienceDetail";

const jobDetails = [
  {
    name: "Nokia Networks",
    startDate: "Aug 2021",
    endDate: "Present",
    location: "Bangalore, India",
    description: [
      "- Implemented a feature that allows users to provision and adjust the maximum count of restoration attempts for unprotected/protected connection",
      "- Developed a UI page to add a backup route to the Service. This feature helps the user to move the traffic to the backup route in case of failure in the current route.",
      "- Improved User Interface (UI) by addressing alignment issues, eliminating unnecessary scroll bars, and converting lengthy text info icons, resulting in a more streamlined and user-friendly experience",
      "- Enhanced software quality through careful code reviews,proactive issue resolution and skillful use of REST APIs to retrieve and display data from database"
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
