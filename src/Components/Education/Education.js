import React from "react";
import { Grid, Cell } from "react-mdl";
import styles from "./Education.module.scss";

class Education extends React.Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startDate} - {this.props.endDate}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 className={styles.education}>{this.props.schoolName} </h4>
          <p> {this.props.schoolDegree}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
