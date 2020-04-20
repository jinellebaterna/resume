import React from "react";
import styles from "./Job.module.scss";

class Job extends React.Component {
  render() {
    const {position, companyName, duration, responsibilities} = this.props;
    return (
      <div className={styles.job}>
        <h5 className={styles.position}>{position}</h5>
        <h6 className={styles.companyName}>{companyName}</h6>
        <h6 className={styles.duration}>({duration})</h6>
        {responsibilities && (
          <>
            <h6> Responsibilities:</h6>
            <ul>
              {responsibilities.map(r => (
                <li>{r}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Job;
