import React from "react";
import styles from "./Projects.module.scss";

class Projects extends React.Component {
  render() {
    return (
      <div className={styles.projects}>
        <h1> Sample Projects here </h1>
        <h2> Mrkdwn.ph </h2>
        <p>
          Built for everyone who wants to spend less, Mrkdwn.ph is a platform
          for discovering all the latest deals, coupons, and discounts from your
          favorite brands and stores.
        </p>
      </div>
    );
  }
}

export default Projects;
