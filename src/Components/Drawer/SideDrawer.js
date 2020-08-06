import React from 'react';
import styles from './SideDrawer.module.scss';

class SideDrawer extends React.Component {
  render() {
    const { onBackdropClick } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.sideDrawer}>
          <div className={styles.items} />
          <ul>
            <li>
            <a href="/">Home</a>
          </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className={styles.backdrop} onClick={onBackdropClick} />
      </div>
    );
  }
}
export default SideDrawer;
