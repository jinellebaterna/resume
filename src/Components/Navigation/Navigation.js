import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import DrawerToggleButton from '../Drawer/DrawerToggleButton';

class Navigation extends React.Component {
  render() {
    const { drawerClickHandler } = this.props;

    return (
      <div className={styles.navigation}>
        <DrawerToggleButton click={drawerClickHandler} />
        <div className={styles.menuItems}>
          <Link to="/">
            <h3 className={styles.menuItem}>Home</h3>
          </Link>
          <Link to="/resume">
            <h3 className={styles.menuItem}>Resume</h3>
          </Link>
          <Link to="/projects">
            <h3 className={styles.menuItem}>Projects</h3>
          </Link>
        </div>
      </div>
    );
  }
}


export default Navigation;
