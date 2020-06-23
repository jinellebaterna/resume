import React from "react";
import Job from "../Job/Job";
import styles from "./Experience.module.scss";

class Experience extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className={styles.container}>
        <h3 className={styles.experience}>|| WORK EXPERIENCE</h3>
        {items.map(job => <Job {...job} />)}
      </div>
    );
  }
}

export default Experience;
