import React, { Component } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import '../styles/home.css';
import '../styles/w3.css';
import background from "../refs/background.jpg";
import Chat from './chat/Chat';

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundImage: `url(${background})`

};

export const Home = ( { children } ) => {
    return (
        <div id="home-section">
            <head>
                <title>Homepage</title>
                <link rel="stylesheet" href="refs/Home.css" />
            </head>
            <body className="cluster">
                <h1>Canvas.io</h1>
                <Button type="submit" href="#/register">
                    REGISTER
                </Button>
                <Button type="submit" href="#/login">
                    LOGIN
                </Button>
            </body>

        </div>
    );
  }
