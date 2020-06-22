import React from "react";
import styles from "./Profile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faMapMarkedAlt,
  faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
        <div/>
        <div/>
        <div/>
        <div className={styles.contactsContainer}>
          <p className={styles.contacts}>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
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
        {/*<p className={styles.contacts}>*/}
        {/*    <FontAwesomeIcon className={styles.icon} icon={faFileDownload} />*/}
        {/*    <a*/}
        {/*      className={styles.downloadCV}*/}
        {/*      href="https://drive.google.com/file/d/1uq_tbesPEJ8Ya_-zGJZdZlge7sY6pOfc/view?usp=sharing"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*      target="_blank"*/}
        {/*    >*/}
        {/*      Download CV*/}
        {/*    </a>*/}
        {/*  </p>*/}
        </div>
      </div>
    );
  }
}
