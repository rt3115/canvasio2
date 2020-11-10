import React, { Component } from 'react';
import '../js/ProfileSettings.js';
import background from "../refs/background.jpg";

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`

};

export const ProfileSettings = ( { children } ) => {
    return (
        <section style={sectionStyle}>
        <div>
            <table>
                <tr>
                    <th>Username</th>
                    <td id="username"></td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td id="password"></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td id="email"></td>
                </tr>
                <tr>
                    <th>Birthdate</th>
                    <td id="birthday"></td>
                </tr>
            </table>
            <button> Logout </button>
            <button> Delete </button>
            </div>
        </section >
    );
  }
