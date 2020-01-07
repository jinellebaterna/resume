import React from "react";
import Job from "../Job/Job";

class Experience extends React.Component {

  render() {
    return (
      <div>
        <h4>Work Experience</h4>
        <Job
          employmentDuration={"January 2018 to Present"}
          position={"Frontend / UX Engineer"}
          companyName={"Mrkdwn, Inc."}
          responsibilities={[
            "Designed adaptive layouts for consistent user experience across the product.",
            "Delivered high-quality design docs: sketches, user flows, wireframes, mockups, specifications using Sketch and Zeplin.",
            "Developed front-end applications using HTML, CSS, Sass, React and Redux.",
            "Integrated Frontend application with REST API."
          ]}
        />
        <Job
          employmentDuration={"February 2013 to December 2017"}
          position={"Project Manager"}
          companyName={"Seer Technologies Inc."}
          responsibilities={[
            "Developed full-scale project plans and associated communications documents, project timelines, and milestones using appropriate tools.",
            "Coordinated internal resources and third parties/vendors for the flawless execution of projects.",
            "Successfully managed project stakeholders.",
            "Led development of sales proposals, project plans and RFP responses.",
            "Prospected and negotiated terms of contract with new clients.",
            "Managed changes in project scope, identify potential crises, devise contingency plans and functioned as an escalation point.",
            "Did QA testing to ensure projects were implemented according to specification and have minimal bugs.",
            "Involved in user interviews and usability testing."
          ]}
        />
      </div>
    );
  }
}

export default Experience;
