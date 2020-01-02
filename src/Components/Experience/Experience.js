import React from "react";
import { Grid, Cell } from "react-mdl";
import Markdown from "../../Markdown";
import styles from "./Experience.module.scss";

class Experience extends React.Component {
  render() {
    return (
      <Grid>
        <Cell col={3}>
          <p className={styles.date}>
            {this.props.startDate} - {this.props.endDate}
          </p>
        </Cell>
        <Cell col={9} >
          <h4 className={styles.position}>{this.props.position} </h4>
          <h5 className={styles.company}>{this.props.companyName} </h5>
          <h6> Responsibilities:</h6>
          <Markdown text={this.props.description}/>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
