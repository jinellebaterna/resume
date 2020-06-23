import React from "react";
import styles from "./Summary.module.scss";

class Summary extends React.Component {
  render() {
    const { summary } = this.props;
    return (
      <div className={styles.container}>
        <h3 className={styles.headline}>|| ABOUT ME</h3>
        <p>{summary}</p>
      </div>
    );
  }
}

export default Summary;
