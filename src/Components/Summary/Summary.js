import React from "react";
import styles from "./Summary.module.scss";

class Summary extends React.Component {
  render() {
    const { summary } = this.props;
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>|| ABOUT ME</h3>
        <p className={styles.headline}>{summary}</p>
      </div>
    );
  }
}

export default Summary;
