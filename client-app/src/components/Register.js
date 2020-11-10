import React, { Component } from 'react';
import '../js/RegisterScript'
import background from "../refs/background.jpg";
import '../styles/w3.css';

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`
}

export const Register = () => {
        return (
            <section style={sectionStyle}>
                <div class="w3-display-middle">
                    <script type="text/javascript" src="./js/RegisterScript.js"></script>
                    <head>
                        <title>Registration</title>
                    </head>
                    <body>
                        <h1>Register</h1>
                        <form method="GET" action="ProfileSettings.html" onsubmit="return checkFields();">
                            <div className="container">
                                <p>Enter your information below</p>


                                <label htmlFor="username"><b>Username</b></label>
                                <input type="text"
                                    placeholder="Username"
                                    name="username"
                                    id="username"
                                    required />
                                <hr />

                                <label htmlFor="email"><b>Email</b></label>
                                <input type="email"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    required />
                                <hr />


                                <label htmlFor="date"><b>Date of Birth</b></label>
                                <input type="date" placeholder="Date" name="date" id="date" required />
                                <hr />


                                <label for="pass"><b>Password</b></label>
                                <input type="password"
                                    placeholder="Password"
                                    name="pass"
                                    id="passr"
                                    required />
                                <hr />

                                <button type="submit" className="registerbtn">Register</button>
                            </div>
                        </form>
                    </body>
                </div>
            </section >
        );
    }
