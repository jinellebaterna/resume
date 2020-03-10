import React from "react";
import Job from "../Job/Job";
import styles from "./Experience.module.scss";

class Experience extends React.Component {
  render() {
    return (
      <div >
        <h3 className={styles.experience}>Work Experience</h3>
        {this.props.items.map(job => <Job {...job} />)}
      </div>
    );
  }
}

export default Experience;
