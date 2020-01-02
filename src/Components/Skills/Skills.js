import React from "react";
import Markdown from "../../Markdown";

class Skills extends React.Component {
  render() {
    return (
      <div>
        <Markdown text={this.props.skill} />
      </div>
    );
  }
}

export default Skills;
