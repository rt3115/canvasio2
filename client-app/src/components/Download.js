import React, { Component } from 'react';
import background from "../refs/background.jpg";
import downloading_file from "../refs/downloading_file.png";

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`

};

export const Download = ( {children} ) => {
        return (
            <section style={sectionStyle}>
        <div>
            <h1> Download</h1>  

            <div>
              <h2>Image Format: </h2>
              <button>PNG</button>
              <button>PDF</button>
              <button>JPEG</button>
              <button>SVG</button>
              <br/>
              <h3>Layers:</h3>
              <h4>Range From </h4>
              <input type="number"></input>
              <h4>To</h4>
              <input type="number"></input>
              <br/>
              <img src={downloading_file} alt="file" width="40px" height="40px" />
            </div>
                </div>
            </section>
    );
  }
