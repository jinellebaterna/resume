import React from "react";
import styles from "./Skills.module.scss";

class Skills extends React.Component {
  render() {
    return (
      <div className={styles.skills}>
        {this.props.skills && (
          <>
            <h4>Skills</h4>
            <ul>
              {this.props.skills.map(s => <li>{s}</li>)}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Skills;
