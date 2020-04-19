import React from "react";
import styles from "./Skills.module.scss";

class Skills extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items && (
          <>
            <h3 className={styles.skills}>Skills</h3>
            <ul>
              {items.map(s => <li>{s}</li>)}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Skills;
