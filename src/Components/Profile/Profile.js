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
        <img
          className={styles.profileImage}
          src="https://webstockreview.net/images/professional-clipart-female-avatar-16.png"
          alt="avatar"
        />
        <h2 className={styles.profileName}>{this.props.name}</h2>
        <h4 className={styles.profilePosition}>{this.props.position}</h4>
        <hr className={styles.bar} />
        <p className={styles.profileObjective}>
          {this.props.headline}
        </p>
        <hr className={styles.bar} />
        <div className={styles.profileObjective}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMapPin} /> Toronto,
            Ontario, Canada{" "}
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobile} />
            (437) 788-1125
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{" "}
            me@jinelle.net
          </p>
        </div>
        <hr className={styles.bar} />
      </div>
    );
  }
}
