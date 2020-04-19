import React from "react";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import styles from "./Content.module.scss"

class Content extends React.Component {
  render() {
    const { experience, skills } = this.props;
    return (
      <div className={styles.content}>
        <Experience items={experience} />
        <Skills items={skills} />
      </div>
    );
  }
}

export default Content;
