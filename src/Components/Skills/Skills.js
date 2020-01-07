import React from "react";
import styles from "./Skills.module.scss";

class Skills extends React.Component {
  render() {
    return (
      <div className={styles.skills}>
        {this.props.items && (
          <>
            <h4>Skills</h4>
            <ul>
              {this.props.items.map(s => <li>{s}</li>)}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Skills;
