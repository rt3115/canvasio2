import React, { Component } from 'react';
import background from "../refs/background.jpg";
import downloading_file from "../refs/downloading_file.png";

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`

};


function Down() {
    const download = e => {
      console.log(e.target.href);
      fetch(e.target.href, {
        method: "GET",
        headers: {}
      })
        .then(response => {
          response.arrayBuffer().then(function(buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "image.png"); //or any other extension
            document.body.appendChild(link);
            link.click();
          });
        })
        .catch(err => {
          console.log(err);
        });
    };


export const Download = ( {children} ) => {
        return (
            <section style={sectionStyle}>
        <div className="Down">
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
            <a
          href="https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png"
          download
          onClick={e => download(e)}
        >
          <i className="fa fa-download" />
          download
        </a>
                </div>
            </section>
    );
  }
}
