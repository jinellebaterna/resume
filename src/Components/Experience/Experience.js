import React from "react";
import Job from "../Job/Job";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <h4>Work Experience</h4>
        {this.props.items.map(job => <Job {...job} />)}
      </div>
    );
  }
}

export default Experience;
