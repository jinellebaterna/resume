import React from "react";
import styles from "./LandingPage.module.scss";
import { Cell, Grid } from "react-mdl";

class LandingPage extends React.Component {
  render() {
    return (
      <div className={styles.landingPage}>
        <Grid className={styles.main}>
          <Cell col={12}>
            <img
              className={styles.avatar}
              src="
              https://webstockreview.net/images/professional-clipart-female-avatar-16.png"
              alt="avatar"
            />
            <div className={styles.banner}>
              <h1 className={styles.position}> Frontend / UX Engineer</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
