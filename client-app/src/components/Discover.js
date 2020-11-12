import React, { Component } from 'react';
import pic1 from "../refs/pic1.JPG";
import pic2 from "../refs/pic2.jpg";
import pic3 from "../refs/pic3.jpg";
import pic4 from "../refs/pic4.jpg";
import pic5 from "../refs/pic5.jpg";
import background from "../refs/background.jpg";
import { Button } from '@material-ui/core';
import '../styles/Discover.css';

var sectionStyle = {
    width: "400%",
    height: "800px",
    backgroundImage: `url(${background})`

};

const canvases = [
    { name: 'name1' },
    { name: 'name2' },
    { name: 'name3' },
    { name: 'name4' },
    { name: 'name5' },
    { name: 'name6' },
    { name: 'name7' },
    { name: 'name8' },
    { name: 'name9' },
    { name: 'name10' },
    { name: 'name11' },
    { name: 'name12' },
    { name: 'name13' },
    { name: 'name14' },
    { name: 'name15' },
    { name: 'name16' }
]

export const Discover = ({ children }) => {
    return (
        <section style={sectionStyle}>
            <div>
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
                <div class='grid-container'>
                    <div> <button className="grid-item"> <img src={pic2} alt="Canvas 2" width="100px" height="100px" /> </button> </div>
                    <div> <button className='grid-item'> <img src={pic1} alt="Canvas 1" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic3} alt="Canvas 3" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic4} alt="Canvas 4" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic5} alt="Canvas 5" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic2} alt="Canvas 2" width="100px" height="100px" /> </button> </div>
                    <div> <button className='grid-item'> <img src={pic1} alt="Canvas 1" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic3} alt="Canvas 3" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic4} alt="Canvas 4" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic5} alt="Canvas 5" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic2} alt="Canvas 2" width="100px" height="100px" /> </button> </div>
                    <div> <button className='grid-item'> <img src={pic1} alt="Canvas 1" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic3} alt="Canvas 3" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic4} alt="Canvas 4" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic5} alt="Canvas 5" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic2} alt="Canvas 2" width="100px" height="100px" /> </button> </div>
                    <div> <button className='grid-item'> <img src={pic1} alt="Canvas 1" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic3} alt="Canvas 3" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic4} alt="Canvas 4" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic5} alt="Canvas 5" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic2} alt="Canvas 2" width="100px" height="100px" /> </button> </div>
                    <div> <button className='grid-item'> <img src={pic1} alt="Canvas 1" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic3} alt="Canvas 3" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic4} alt="Canvas 4" width="100px" height="100px" /> </button> </div>
                    <div> <button className="grid-item"> <img src={pic5} alt="Canvas 5" width="100px" height="100px" /> </button> </div>

                </div>
               

            </div>
        </section>
    );
}
