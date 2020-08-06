import React from "react";
import Typewriter from 'typewriter-effect';

class TypewriterEffect extends React.Component {
  render() {
    return (
    <Typewriter
      options={{
        strings: ['Self-taught','Disciplined','Motivated'],
        autoStart: true,
        loop: true,
      }}
    />
    );
  }
}

export default TypewriterEffect;
