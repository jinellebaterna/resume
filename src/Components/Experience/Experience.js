import React from "react";
import Markdown from "../../Markdown";
import styles from "./Experience.module.scss";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p className={styles.date}>
            {this.props.startDate} - {this.props.endDate}
          </p>
        </div>
        <div>
          <h4 className={styles.position}>{this.props.position} </h4>
          <h5 className={styles.company}>{this.props.companyName} </h5>
          <h6> Responsibilities:</h6>
          <Markdown text={this.props.description} />
        </div>
      </div>
    );
  }
}

export default Experience;
