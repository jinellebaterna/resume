import React from "react";
import { List, ListItem, ListItemContent } from "react-mdl";
import styles from "./Contact.module.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className={styles.contactBody}>
        <div>
          <img
            className={styles.contactImage}
            src="https://webstockreview.net/images/professional-clipart-female-avatar-16.png"
            alt="avatar"
          />
          <h2 className={styles.contactName}> Contact Me </h2>
          <hr className={styles.contactGridRight} />
          <div className={styles.contactIcon}>
            <List>
              <ListItem>
                <ListItemContent className={styles.contactName}>
                  <i className={"fa fa-phone-square"} aria-hidden="true" />
                  (437)-7881125
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent className={styles.contactName}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  me@jinelle.net
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent className={styles.contactName}>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  linkedin.com/in/jinellemariebaterna
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent className={styles.contactName}>
                  <i className="fa fa-address-card" aria-hidden="true" />
                  Toronto, Ontario, Canada
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
