import React, { Component } from 'react';
import Canvas from '../js/canvas';
import '../styles/canvasStyles.css';
import '../styles/w3.css';
import { Button, ButtonGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import background from "../refs/background.jpg";
import BrushIcon from '@material-ui/icons/Brush';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    input: {
        width: 42,
    },
    indicator: {
        top: "10px",
        left: "20px",
    },
});

var sectionStyle = {
    width: "400%",
    height: "800px",
    //backgroundImage: `url(${background})`

};

//this is so gross...
const fs = require('../js/canvas.js');
function forceLoad() {
    console.log("im working");
    fs.default();
}
function changeWidth(value) {
    fs.WidthChange(value);
}

export const Drawing = ({ children }) => {
    //This is going to be disgusting, yay

    const handleClick = () => {
        forceLoad();
    }

    //width slider stuff
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        changeWidth(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 200) {
            setValue(200);
        }
    };

    //layer tab stuff
    const [LayerValue, setLayerValue] = React.useState(0);

    const handleLayerChange = (event, newValue) => {
        setLayerValue(newValue);
    };


    //shapes menu stuff

    return (

        <section style={sectionStyle}>

            <script type="text/javascript" src="../js/canvas.js"></script>

            <Grid container>
                <Grid item>

                    <p>
                        <select name="selector" id="selector">
                            <option value="chalk">Chalk</option>
                            <option value="line">Line</option>
                            <option value="rect">Rectangle</option>
                        </select>
                    </p>

                    <div className="btn-group-toolbar">
                        <Button variant="outlined" id="paint_button"> <BrushIcon /></Button>
                        <Button variant="outlined" id="eraser_button">Eraser</Button>
                        <Button variant="outlined" id="line_button">Line</Button>
                        <Button variant="outlined" id="rect_button">Rectangle</Button>
                        <Button variant="outlined" id="full_shappes_menu">Full Shapes</Button>
                        <Button variant="outlined" id="hollow_shapes_menu">Hollow Shapes</Button>
                    </div>



                </Grid>
                <Grid item>
                    <Grid container spacing={2} alignItems="center">

                        <Grid item> <Button onClick={handleClick}> Start Drawing </Button> </Grid>
                        <Grid item>

                            <div className={classes.root}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        Width
                                    </Grid>
                                    <Grid item xs>
                                        <Slider
                                            value={typeof value === 'number' ? value : 0}
                                            onChange={handleSliderChange}
                                            aria-labelledby="input-slider"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Input
                                            className={classes.input}
                                            value={value}
                                            margin="dense"
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            inputProps={{
                                                step: 10,
                                                min: 0,
                                                max: 200,
                                                type: 'number',
                                                'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>

                        <Grid item> <input type="color" id="colorPicker" /> </Grid>

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
                <Grid item>
                    <Tabs
                        orientation="vertical"
                        className="layer-tabs"
                        value={LayerValue}
                        onChange={handleLayerChange}
                    >
                        <Tab label="L1" />
                        <Tab label="L2" />
                        <Tab label="L3" />
                        <Tab label="L4" />
                        <Tab label="L5" />
                        <Tab label="L6" />
                        <Tab label="L7" />
                        <Tab label="L8" />
                        <Tab label="L9" />
                        <Tab label="L10" />
                    </Tabs>
                </Grid>
            </Grid>

        </section >
    );

}
