import React from "react";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import styles from "./Content.module.scss"

class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Experience />
        <Skills skills={[
          "Project Management",
          "Product Management",
          "Quality Assurance",
          "Amazon Web Services",
          "React",
          "Sass",
          "Javascript",
          "HTML",
          "CSS",
          "User Experience Design",
          "Sketch",
          "Zeplin",
          "Invision",
          "Adobe XD",
          "Balsamiq",
          "Prototyping",
          "Usability Testing"
        ]} />
      </div>
    );
  }
}

export default Content;
