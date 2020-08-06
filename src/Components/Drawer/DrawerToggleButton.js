import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './DrawerToggleButton.module.scss';

const DrawerToggleButton = (props) => (
  <div>
    <button className={styles.toggleButton} onClick={props.click} type="button">
      <FontAwesomeIcon icon={faBars} />
    </button>
  </div>
);

export default DrawerToggleButton;
