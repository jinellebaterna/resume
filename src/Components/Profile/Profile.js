import React from "react";
import styles from "./Profile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapPin,
  faMobile
} from "@fortawesome/free-solid-svg-icons";

export default class Profile extends React.Component {
  render() {
    return (
      <div className={styles.profile}>
        <div className={styles.imgContainer}>
          <img
            className={styles.profileImage}
            src="photo.jpg"
            alt="profile photo"
          />
        </div>
        <h2 className={styles.profileName}>{this.props.name}</h2>
        <h4 className={styles.profilePosition}>{this.props.position}</h4>
        <hr className={styles.bar} />
        <p className={styles.profileObjective}>{this.props.headline}</p>
        <hr className={styles.bar} />
        <div className={styles.profileObjective}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMapPin} />{" "}
            {this.props.location}
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobile} />
            {this.props.mobileNumber}
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{" "}
            {this.props.email}
          </p>
        </div>
        <hr className={styles.bar} />
      </div>
    );
  }
}
