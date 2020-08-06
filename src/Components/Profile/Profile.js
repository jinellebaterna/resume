import React from "react";
import styles from "./Profile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faMapMarkedAlt,
  faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default class Profile extends React.Component {
  render() {
    const {
      name,
      position,
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
        <div className={styles.nameContainer}>
          <h2 className={styles.name}>{name}</h2>
          <h4 className={styles.position}>{position}</h4>
        </div>
        <div/>
        <div/>
        <div/>
        <div className={styles.contactsContainer}>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            <a
              className={styles.link}
              href={"https://www.linkedin.com/in/jinellebaterna/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              {linkedIn}
            </a>
          </p>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelopeSquare} />{" "}
            {email}
          </p>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faPhoneSquareAlt} />
            {mobileNumber}
          </p>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faMapMarkedAlt} />{" "}
            {location}
          </p>
        </div>
        <div />
        <div />
      </div>
    );
  }
}
