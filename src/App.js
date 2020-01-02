import React from "react";
import Resume from "./Components/Resume/Resume";
import styles from "./App.module.scss";


class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Resume />
      </div>
    );
  }
}

export default App;
