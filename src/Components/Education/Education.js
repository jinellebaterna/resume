import React from "react";
import styles from "./Education.module.scss";

class Education extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.education}>|| EDUCATION</h3>
        <h6 className={styles.degree}>Bachelor of Science in Nursing</h6>
        <span className={styles.school}>St. Rita Hospital College of Nursing</span>
        <span className={styles.school}>2006 - 2010</span>
      </div>
    );
  }
}

export default Education;
