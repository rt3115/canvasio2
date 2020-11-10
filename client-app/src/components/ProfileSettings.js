import React, { Component } from 'react';
import '../js/ProfileSettings.js';
import background from "../refs/background.jpg";

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`

};



export const ProfileSettings = ( { children } ) => {

    var username = getURLParameter('username');
var pass = getURLParameter('pass');
var email = getURLParameter('email');
var birthday = getURLParameter('date');

function getURLParameter(param) {
    var pageURL = window.location.search.substring(1);
    var URLVariables = pageURL.split('&');
    for (var i = 0; i < URLVariables.length; i++) {
        var parameterName = URLVariables[i].split('=');
        if (parameterName[0] === param) {
            if (decodeURIComponent(parameterName[1]) == null) {
                return parameterName[1]
            } else {
                return decodeURIComponent(parameterName[1].replace(/\+/g, " "));
            }
        }
    }
    return false;
}



    return (
        <section style={sectionStyle}>
        <div>
            <table>
                <tr>
                    <th>Username</th>
                    <td id="username">{username}</td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td id="password">{pass}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td id="email">{email}</td>
                </tr>
                <tr>
                    <th>Birthdate</th>
                    <td id="birthday">{birthday}</td>
                </tr>
            </table>
            <button> Logout </button>
            <button> Delete </button>
            </div>
        </section >
    );
  }
