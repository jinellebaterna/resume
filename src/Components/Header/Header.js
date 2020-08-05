import React from 'react';
import SideDrawer from '.././Drawer/SideDrawer';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sideDrawerOpen: false };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <div className={styles.header}>
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
        {this.state.sideDrawerOpen && (
          <SideDrawer onBackdropClick={this.backdropClickHandler} />
        )}
      </div>
    );
  }
}

export default Header;
