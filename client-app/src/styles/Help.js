import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Col, Grid, Row } from 'react-bootstrap';
import background from "./refs/background.jpg";

var sectionStyle = {
    width: "400%",
    height: "2000px",
    backgroundImage: `url(${background})`

};

export class Help extends Component {
    displayName = Help.name


    render() {
        return (
            <section style={sectionStyle}>
                <div>
                    <br></br>
                    <textarea style="resize: none" rows="5" columns="30" name="description">This is how you use the app.</textarea>
                </div>
            </section>
        );
    }
}
