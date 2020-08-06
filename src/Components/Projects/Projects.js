import React from "react";
import styles from "./Projects.module.scss";

class Projects extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.projects}>
          <ul>
            <h2>My Projects</h2>
            <div className={styles.bannerContainer}>
              <li>
                <a
                  href="https://www.mrkdwn.ph/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Mrkdwn.ph
                </a>
              </li>
              <li>
                Built for everyone who wants to spend less, Mrkdwn is a platform
                for discovering all the latest deals, coupons, and discounts from
                your favorite brands and stores. Mrkdwn also helps merchants reach
                and understand their potential customers, and increase brand
                exposure, and revenue.
              </li>
            </div>
            <hr />
            <div className={styles.bannerContainer}>
              <li>
                <a
                  href="https://dev.wfhjobs.ph/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WFHJobs
                </a>
              </li>
              <li>
                WFHJobs is a platform built for individuals pursuing remote work.
                WFHJobs help companies reach and find talents by posting their job
                on our site.
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
