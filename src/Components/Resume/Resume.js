import React from "react";
import styles from "./Resume.module.scss";
import Profile from "../Profile/Profile";
import resumeData from "../../Data/resume";
import Content from "../Content/Content";

class Resume extends React.Component {

  render() {
    return (
      <div className={styles.resume}>
        <Profile {...resumeData.profile} />
        <Content />
      </div>
    );
  }
}

export default Resume;
