import React, { Component } from 'react';
import background from "../refs/background.jpg";

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`
}

export const Stats = () => {
      return (
          <section style={sectionStyle}>
        <div>
            <h1> Hello World! </h1>
              </div>
          </section >
    );
  }
