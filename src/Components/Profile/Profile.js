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
          <img className={styles.profileImage} src="photo.jpg" alt="profile" />
        </div>
        <h2 className={styles.name}>{this.props.name}</h2>
        <h4 className={styles.position}>{this.props.position}</h4>
        <hr className={styles.bar} />
        <p className={styles.headline}>{this.props.headline}</p>
        <hr className={styles.bar} />
        <div>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faMapPin} />{" "}
            {this.props.location}
          </p>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faMobile} />
            {this.props.mobileNumber}
          </p>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{" "}
            {this.props.email}
          </p>
        </div>
        <hr className={styles.bar} />
        <p>
          <a
            href="https://drive.google.com/file/d/1uq_tbesPEJ8Ya_-zGJZdZlge7sY6pOfc/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.downloadCV}
          >
            Download CV
          </a>
        </p>
      </div>
    );
  }
}
