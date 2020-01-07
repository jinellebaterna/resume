import React from "react";
import styles from "./Job.module.scss";

class Job extends React.Component {
  render() {
    return (
      <div className={styles.workExperience}>
        <h6>
          {this.props.employmentDuration} <br />
          {this.props.position} <br />
          {this.props.companyName} <br />
        </h6>
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
