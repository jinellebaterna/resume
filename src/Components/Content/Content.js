import React from "react";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import styles from "./Content.module.scss"

class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Experience items={this.props.experience} />
        <Skills items={this.props.skills} />
      </div>
    );
  }
}

export default Content;
