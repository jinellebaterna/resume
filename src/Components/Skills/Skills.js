import React from "react";
import styles from "./Skills.module.scss";
import Education from "../Education/Education";

class Skills extends React.Component {
  render() {
    const { technical, others, tools } = this.props.items;
    return (
      <div className={styles.container}>
        <h3 className={styles.skills}>|| SKILLS</h3>
        {technical && (
          <>
            <h6 className={styles.group}>Technical</h6>
            <p>
              {technical.map(t => (
                <li className={styles.list}>{t}</li>
              ))}
            </p>
          </>
        )}
        {others && (
          <>
            <h6 className={styles.group}>Others</h6>
            <p>
              {others.map(o => (
                <li className={styles.list}>{o}</li>
              ))}
            </p>
          </>
        )}
        {tools && (
          <>
            <h6 className={styles.group}>Tools</h6>
            <p>
              {tools.map(s => (
                <li className={styles.list}>{s}</li>
              ))}
            </p>
          </>
        )}
        <Education />
      </div>
    );
  }
}

export default Skills;
