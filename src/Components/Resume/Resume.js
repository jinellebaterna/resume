import React from "react";
import styles from "./Resume.module.scss";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Profile from "../Profile/Profile";

class Resume extends React.Component {
  render() {
    return (
      <div className={styles.profileContent}>
        <Profile />
        <div className={styles.resumeContent}>
          <h3> Work Experience </h3>
          <Experience
            position={"Frontend / UX Engineer"}
            companyName={"Mrkdwn, Inc."}
            startDate={"January 2018"}
            endDate={"Present"}
            description={
              "* Designed adaptive layouts for consistent user experience across the product.\n" +
              "* Delivered high-quality design docs: sketches, user flows, wireframes, mockups, specifications using Sketch and Zeplin.\n" +
              "* Developed front-end applications using HTML, CSS, Sass, React and Redux.\n" +
              "* Integrated Frontend application with REST API."
            }
          />

          <Experience
            position={"Project Manager"}
            companyName={"Seer Technologies Inc."}
            startDate={"February 2013"}
            endDate={"December 2017"}
            description={
              "* Developed full-scale project plans and associated communications documents, project timelines, and milestones using appropriate tools.\n" +
              "* Coordinated internal resources and third parties/vendors for the flawless execution of projects.\n" +
              "* Successfully managed project stakeholders\n" +
              "* Led development of sales proposals, project plans and RFP responses.\n" +
              "* Prospected and negotiated terms of contract with new clients.\n" +
              "* Managed changes in project scope, identify potential crises, devise contingency plans and functioned as an escalation point.\n" +
              "* Did QA testing to ensure projects were implemented according to specification and have minimal bugs\n" +
              "* Involved in user interviews and usability testing."
            }
          />
          <hr />
          <h3> Skills </h3>
          <Skills
            skill={
              "* Project Management \n" +
              "\n" +
              "* Product Management\n" +
              "* Quality Assurance\n" +
              "\n" +
              "* Amazon Web Services\n" +
              "\n" +
              "* React\n" +
              "\n" +
              "* Sass\n" +
              "\n" +
              "* Javascript\n" +
              "\n" +
              "* HTML\n" +
              "\n" +
              "* CSS\n" +
              "\n" +
              "* User Experience Design\n" +
              "\n" +
              "* Sketch\n" +
              "\n" +
              "* Zeplin\n" +
              "\n" +
              "* Invision\n" +
              "\n" +
              "* Adobe XD\n" +
              "\n" +
              "* Balsamiq\n" +
              "\n" +
              "* Prototyping\n" +
              "\n" +
              "* Usability Testing"
            }
          />
        </div>
      </div>
    );
  }
}

export default Resume;
