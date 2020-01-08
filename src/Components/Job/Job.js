import React from "react";
import styles from "./Job.module.scss";

class Job extends React.Component {
  render() {
    return (
      <div className={styles.job}>
        <h5 className={styles.position}>{this.props.position}</h5>
        <h6 className={styles.companyName}>{this.props.companyName}</h6>
        <h6 className={styles.duration}>({this.props.duration})</h6>
        {this.props.responsibilities && (
          <>
            <h6> Responsibilities:</h6>
            <ul>
              {this.props.responsibilities.map(r => (
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
