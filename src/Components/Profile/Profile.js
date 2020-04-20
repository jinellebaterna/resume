import React from "react";
import styles from "./Profile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapPin,
  faMobile,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default class Profile extends React.Component {
  render() {
    const {
      name,
      position,
      headline,
      location,
      mobileNumber,
      email,
      linkedIn
    } = this.props;
    return (
      <div className={styles.profile}>
        <div className={styles.imgContainer}>
          <img className={styles.profileImage} src="photo.jpg" alt="profile" />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <h4 className={styles.position}>{position}</h4>
        <div className={styles.bar} />
        <p className={styles.headline}>{headline}</p>
        <div className={styles.bar} />
        <div>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faMapPin} />{" "}
            {location}
          </p>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faMobile} />
            {mobileNumber}
          </p>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{" "}
            {email}
          </p>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
            <a
              className={styles.linkedIn}
              href={"https://www.linkedin.com/in/jinellebaterna/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              {linkedIn}
            </a>
          </p>
        <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faFileDownload} />
            <a
              className={styles.downloadCV}
              href="https://drive.google.com/file/d/1uq_tbesPEJ8Ya_-zGJZdZlge7sY6pOfc/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </a>
          </p>
        </div>
        <div className={styles.bar} />
      </div>
    );
  }
}
