import React from "react";
import Job from "../Job/Job";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <h3>Work Experience</h3>
        {this.props.items.map(job => <Job {...job} />)}
      </div>
    );
  }
}

export default Experience;
