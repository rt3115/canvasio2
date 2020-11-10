import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Col, Grid, Row } from 'react-bootstrap';
import pic1 from "../refs/pic1.JPG";
import pic2 from "../refs/pic2.jpg";
import pic3 from "../refs/pic3.jpg";
import pic4 from "../refs/pic4.jpg";
import pic5 from "../refs/pic5.jpg";
import background from "../refs/background.jpg";

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`

};

//testing

export const DashBoard = ( { children } ) => {
        return (
            <section style={sectionStyle}>
            <div>
                <div>
                    <br></br>
                    <h1> My Files </h1>
                    <br></br>
                    <label>Search</label>
                    <input type="text" search="search" />
                    <input type="submit" name="search" />
                    <br></br>
                    <label for="sort">Filter by:</label>
                    <select name="fitler" id="sorts">
                        <option value="Edits">Most edits to least</option>
                        <option value="Veiws">Most veiws to least</option>
                    </select>
                    <br></br>
                    <img src={pic3} alt="Canvas 3" width="100px" height="100px"/>
                    <img src={pic4} alt="Canvas 4" width="100px" height="100px"/>
                    <img src={pic5} alt="Canvas 5" width="100px" height="100px"/>
                </div>
                <div>
                    <br></br>
                    <h1> Shared Files </h1>
                    <br></br>
                    <label>Search</label>
                    <input type="text" search="search" />
                    <input type="submit" name="search" />
                    <br></br>
                    <label for="sort">Filter by:</label>
                    <select name="fitler" id="sorts">
                        <option value="Edits">Most edits to least</option>
                        <option value="Veiws">Most veiws to least</option>
                    </select>
                    <br></br>
                    <img src={pic1} alt="Canvas 1" width="100px" height="100px"/>
                    <img src={pic2} alt="Canvas 2" width="100px" height="100px"/>
                </div>
                <div>
                    <br></br>
                    <h1> Parties </h1>
                    <br></br>
                    <textarea style={{ resize: "none", rows: 2, columns: 3, name:"description" }}>Party Name</textarea><br></br>
                    <textarea style={{ resize: "none", rows: 2, columns: 3, name:"description" }}>Party Name</textarea> <br></br>
                    <textarea style={{ resize: "none", rows: 2, columns: 3, name:"description" }}> Party Name</textarea > <br></br>
                    <textarea style={{ resize: "none", rows: 2, columns: 3, name:"description" }}> Party Name</textarea > <br></br>
                    <textarea style={{ resize: "none", rows: 2, columns: 3, name:"description" }}>Party Name</textarea> <br></br>
                    <textarea style={{ resize: "none", rows: 2, columns: 3, name:"description" }}>Party Name</textarea> <br></br>
                    <textarea style={{ resize: "none", rows: 2, columns: 3, name:"description" }}>Party Name</textarea> <br></br>
                    <textarea style={{ resize: "none", rows: 2, columns: 3, name:"description" }}>Party Name</textarea> <br></br>
                <br></br>

                </div >
                </div >
            </section>
        );
    }
