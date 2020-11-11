import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import testImage from "../refs/testImage.jpg";
import Canvas from '../js/canvas';
import '../styles/canvasStyles.css';
import '../styles/w3.css';
import { Button, ButtonGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import background from "../refs/background.jpg";
import WidthSlider from "./drawing/WidthSlider.jsx";
import BrushIcon from '@material-ui/icons/Brush';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    input: {
        width: 42,
    },
});

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
        width: 200,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

var sectionStyle = {
    width: "400%",
    height: "800px",
    //backgroundImage: `url(${background})`

};

export const Drawing = ( { children }) => {
      //This is going to be disgusting, yay

        return (
            <section style={sectionStyle}>
                
                <script type="text/javascript" src="./js/canvas.js"></script>

                <Grid container>
                    <Grid item>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <p>
                            <select name="selector" id="selector">
                                <option value="chalk">Chalk</option>
                                <option value="line">Line</option>
                                <option value="rect">Rectangle</option>
                            </select>
                        </p>
                        
                        <div className="btn-group">
                            <Button className="w3-button w3-white w3-border" id="paint_button"> <BrushIcon /></Button>
                            <Button className="w3-button w3-white w3-border" id="eraser_button">Eraser</Button>
                            <Button className="w3-button w3-white w3-border" id="line_button">Line</Button>
                            <Button className="w3-button w3-white w3-border" id="rect_button">Rectangle</Button>
                            <Button className="w3-button w3-white w3-border" id="increase_width_button">+</Button>
                            <Button className="w3-button w3-white w3-border" id="decrease_width_button">-</Button>
                            <div>
                                <label htmlFor="colorPick"> Color Picker </label>
                                <input type="color" id="colorPicker" />
                            </div>
                        </div>

                        
                        
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item> <WidthSlider id="width_slider"/> </Grid>
                        </Grid>
                        <div id="wrapper">
                                                      

                            <div id="canvasPlaceHolder">                                
                                <div id="canvasHolder">
                                       <canvas id="drawingCanvas" height="800" width="1020" className="w3-border">
                                          <p className="noscript">We're sorry, this web application is currently not supported with your browser. Please use an alternate browser or download a supported <br />browser. Supported browsers: <a href="http://www.google.com/chrome">Google Chrome</a>, <a href="http://www.opera.com">Opera</a>, <a href="http://www.mozilla.com">Firefox</a>, <a href="http://www.apple.com/safari">Safari</a>, <br />and <a href="http://www.konqueror.org">Konqueror</a>. Also make sure your JavaScript is enabled.</p>
                                       </canvas>
                                </div>
                            </div>

                        </div>
                    </Grid>
                </Grid>

             </section >
            );

        //return <Canvas />
        /*
        return (
            <Grid>
                <script type="text/javascript" src="./js/canvas.js"></script>
                <Col>
                    <Row>
                        <h1> Canvas Name Goes Here </h1>
                    </Row>
                    <Row>
                        <buttonGroup aria-label="Basic example">
                            <button variant="secondary">
                                <Glyphicon glyph='glyphicon glyphicon-erase' />
                            </button>
                            <button variant="secondary">
                               <Glyphicon glyph='glyphicon glyphicon-pencil' />
                            </button>
                            <button variant="secondary">
                               <Glyphicon glyph='glyphicon glyphicon-tint' />
                            </button>
                        </buttonGroup>
                    </Row>
                    <Row>
                        <link rel="stylesheet" type="text/css" href="./styles/canvasstyles.css" />
                        
                        <div id="wrapper">
                            <div id="canvasPlaceHolder">
                                <p>
                                        <select name="selector" id="selector">
                                        <option value="chalk">Chalk</option>
                                        <option value="line">Line</option>
                                        <option value="rect">Rectangle</option>
                                    </select>
                                </p>
                                <div id="paint">
                                    
                                </div>
                                <canvas id="drawingCanvas" width="800" height="800">
                                    <p className="noscript">It broke, have fun!</p>
                                </canvas>
                            </div>
                        </div>
                    </Row>
                </Col>
        </Grid>
    );
    */
  }
