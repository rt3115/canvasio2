import React, { Component } from 'react';
import '../js/LoginScript';
import '../styles/Login.css';
import '../styles/w3.css';
import bg from '../refs/testImage.jpg';
import background from "../refs/background.jpg";

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`
};

export const Login = ( { children } ) => {
        return (
            <section style={sectionStyle}>
                <div class="w3-display-middle">
                    <head>
                        <title>Registation</title>
                    </head>
                    <body>
                        <h1>Log in</h1>
                        <form method="GET" action="ProfileSettings.html" onsubmit="return checkFields();">
                            <div class="container">
                                <p>Enter your information below</p>

                                <label for="username"><b>Username</b></label>
                                <input type="text"
                                    placeholder="Username"
                                    name="username"
                                    id="username"
                                    required />
                                <hr />

                                <label for="pass"><b>Password</b></label>
                                <input type="password"
                                    placeholder="Password"
                                    name="pass"
                                    id="pass"
                                    required />
                                <hr />

                                <button type="submit" class="registerbtn">Login</button>
                            </div>
                        </form>
                    </body>
                    <style>

                    </style>
                </div>
            </section>
        );
    }


