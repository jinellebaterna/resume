import React from "react";
import TypewriterEffect from "../Typewriter/TypewriterEffect";
import styles from "./Home.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.container}>
          <h2 className={styles.name}>Hi, I'm Jinelle Baterna</h2>
          <h3 className={styles.typewriter}>
            <span className={styles.type}>A</span>
            <TypewriterEffect />
            <span>Web Developer</span>
          </h3>
          <div className={styles.bar} />
          <div className={styles.contact}>
            <p>
              <a
                className={styles.item}
                href={"https://www.linkedin.com/in/jinellebaterna/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
              </a>
            </p>
            <p>
              <a
                className={styles.item}
                href={"https://github.com/jinellebaterna"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
            </p>
            <p>
              <a
                className={styles.item}
                href={"mailto: me@jinelle.net"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
