import React from "react";
import styles from "./Resume.module.scss";
import Profile from "../Profile/Profile";
import resumeData from "../../Data/resume";
import Content from "../Content/Content";
import Summary from "../Summary/Summary";

class Resume extends React.Component {

  render() {
    return (
      <div className={styles.resume}>
        <Profile {...resumeData.profile} />
        {/*<Summary />*/}
        <Content experience={resumeData.experience} skills={resumeData.skills} />
      </div>
    );
  }
}

export default Resume;
