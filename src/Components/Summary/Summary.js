import React from "react";
import styles from "./Summary.module.scss";

class Summary extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.headline}>|| CAREER SUMMARY</h3>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
          blandit lacus. Fusce consequat, lectus a consectetur tristique, odio
          nibh scelerisque urna, ut mollis lectus lacus sit amet dolor. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aenean sed dolor pulvinar, bibendum quam
          elementum, lacinia odio. Integer non dignissim nibh. Sed imperdiet
          nisi in eros semper, aliquet lobortis leo elementum. Etiam convallis
          felis pellentesque vehicula condimentum.
        </span>
      </div>
    );
  }
}

export default Summary;
