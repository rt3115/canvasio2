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
import pic1 from "../refs/pic1.JPG";
import pic2 from "../refs/pic2.jpg";
import pic3 from "../refs/pic3.jpg";
import pic4 from "../refs/pic4.jpg";
import pic5 from "../refs/pic5.jpg";

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



//this is so gross...
const fs = require('../js/canvas.js');


function changeWidth(value) {
    fs.WidthChange(value);
}



//shapes menu stuff


export const Drawing = ({ children }) => {
    //This is going to be disgusting, yay


    function toggle_visibility(id) {
        var e = document.getElementById(id);
        e.display = 'none';
        /*
        if(e.style.display == 'block')
           e.style.display = 'none';
        else
           e.style.display = 'block';
        */
    }


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

    //grabbing the image to load if there is one
    var cId = getURLParameter('cId');
    var Image;

    if (cId) {
        switch (cId) {
            case "canvas1": Image = pic1;
                break;
            case "canvas2": Image = pic2;
                break;
            case "canvas3": Image = pic3;
                break;
            case "canvas4": Image = pic4;
                break;
            case "canvas5": Image = pic5;
                break;

        }
    }

    const handleClick = () => {
        const fs = require('../js/canvas.js');
        fs.default();
        toggle_visibility('start_drawing');
    }


    var sectionStyle = {
        width: "1000px",
        height: "900px",
        backgroundImage: `url(${Image})`
    };

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
    const [anchore1, setAnchorE1] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorE1(null);
    };

    const [anchore2, setAnchorE2] = React.useState(null);

    const handleMenuClickHollowShapes = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleMenuCloseHollowShapes = (event) => {
        setAnchorE2(null);
    }



    return (

        <section>
            <img src={pic1} style={{ display: 'none' }} id="pic1" />
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

                        <Button
                            variant="outlined"
                            onClick={handleMenuClick}
                            id="full_shappes_menu"
                        >
                            Full Shapes
                        </Button>

                        <Menu
                            id="full-shapes-menu"
                            anchorE1={anchore1}
                            keepMounted
                            open={Boolean(anchore1)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem>
                                <Button onClick={handleMenuClose} id="solid_box_button">Box</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button onClick={handleMenuClose} id="solid_circle_button">Circle</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button onClick={handleMenuClose} id="solid_rectangle_button">Rectangle</Button>
                            </MenuItem>
                        </Menu>

                        <Button
                            variant="outlined"
                            id="hollow_shapes_menu"
                            onClick={handleMenuClickHollowShapes}
                        >
                            Hollow Shapes
                        </Button>
                        <Menu
                            id="full-shapes-menu"
                            anchorE1={anchore2}
                            keepMounted
                            open={Boolean(anchore2)}
                            onClose={handleMenuCloseHollowShapes}
                        >
                            <MenuItem>
                                <Button onClick={handleMenuCloseHollowShapes} id="hollow_box_button" >Hollow Box</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button onClick={handleMenuCloseHollowShapes} id="hollow_circle_button">Hollow Circle</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button onClick={handleMenuCloseHollowShapes} id="hollow_rectangle_button">Hollow Rectangle</Button>
                            </MenuItem>
                        </Menu>

                    </div>



                </Grid>
                <Grid item>
                    <Grid container spacing={2} alignItems="center">

                        <Grid item>  </Grid>
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
                        <Grid item> 
                            <a download="myImage.jpg" id="downloadButton" href="" type="button"> DownLoad </a>
                        </Grid>

                    </Grid>
                    <div id="wrapper">

                        <div id="canvasPlaceHolder">
                            <div id="canvasHolder">
                                <canvas id="drawingCanvas" height="900px" width="1000px" className="w3-border" style={sectionStyle} >
                                    <p className="noscript">We're sorry, this web application is currently not supported with your browser. Please use an alternate browser or download a supported <br />browser. Supported browsers: <a href="http://www.google.com/chrome">Google Chrome</a>, <a href="http://www.opera.com">Opera</a>, <a href="http://www.mozilla.com">Firefox</a>, <a href="http://www.apple.com/safari">Safari</a>, <br />and <a href="http://www.konqueror.org">Konqueror</a>. Also make sure your JavaScript is enabled.</p>
                                </canvas>
                                <button onClick={handleClick} id="start_drawing" variant="contained"> Click Anywhere here to begin drawing </button>
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
                    </Tabs>
                </Grid>
            </Grid>

        </section >
    );

}
