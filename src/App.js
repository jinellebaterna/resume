import React from "react";
import styles from "./App.module.scss";
import Resume from "./Components/Resume/Resume";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div>
          <Resume />
        </div>
      </div>
    );
  }
}

export default App;
