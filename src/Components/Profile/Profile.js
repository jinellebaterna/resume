import React from "react";
import styles from "./Profile.module.scss";

class Profile extends React.Component {
  render() {
    return (
      <div className={styles.profile}>
        <img
          className={styles.profileImage}
          src="https://webstockreview.net/images/professional-clipart-female-avatar-16.png"
          alt="avatar"
        />

        <h2 className={styles.profileName}> Jinelle Marie R. Baterna</h2>
        <h4 className={styles.profilePosition}> Frontend / UX Engineer </h4>
        <hr className={styles.bar} />
        <p className={styles.profileObjective}>
          Frontend Developer with experience in Project Management, UX design,
          and Business Dev't.
        </p>

        <hr className={styles.bar} />
        <div className={styles.profileContact}>
          <h5>Address:</h5>
          <p> Toronto, Ontario, Canada</p>
          <h5>Mobile Number:</h5>
          <p> (437)788-1125</p>
          <h5>Email Address:</h5>
          <p> me@jinelle.net</p>
        </div>
        <hr className={styles.bar} />
      </div>
    );
  }
}

export default Profile;
