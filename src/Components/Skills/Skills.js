import React from "react";
import styles from "./Skills.module.scss";

class Skills extends React.Component {
  render() {
    return (
      <div>
        {this.props.items && (
          <>
            <h3 className={styles.skills}>Skills</h3>
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
