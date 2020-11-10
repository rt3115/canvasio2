import React, { Component } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import '../styles/home.css'
import '../styles/w3.css'
import background from "../refs/background.jpg";

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`

};

export const Home = ( { children } ) => {
    return (
        <section style={sectionStyle}>
        <div class="w3-display-middle">
            <head>
                <title>Homepage</title>
                <link rel="stylesheet" href="refs/Home.css" />
            </head>
            <body>
                <h1>Canvas.io</h1>
                <Button type="submit" href="/register">
                    REGISTER
                </Button>
                <Button type="submit" href="/login">
                    LOGIN
                </Button>
            </body>
          
            </div>
        </section>
    );
  }
