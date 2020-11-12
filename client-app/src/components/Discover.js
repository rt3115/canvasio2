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
                    <div className="grid-item">
                        <form action="#/Drawing">
                            <Button className="canvas-button" variant='contained' type="submit">
                                <img src={pic1} alt="Canvas 2" width="100px" height="100px" />
                                <label htmlfor="cId"></label>
                                <input type="hidden" id="cId" name="cId" value="canvas1" />
                            Canvas Name<br></br>User 1 <br></br> 102 Views
                            </Button>
                        </form>
                    </div>
                    <div className="grid-item">
                        <form action="#/Drawing">
                            <Button className="canvas-button" variant='contained' type="submit">
                                <img src={pic2} alt="Canvas 2" width="100px" height="100px" />
                                <label htmlfor="cId"></label>
                                <input type="hidden" id="cId" name="cId" value="canvas2" />
                            Canvas Name<br></br>User 1 <br></br> 102 Views
                            </Button>
                        </form>
                    </div>
                    <div className="grid-item">
                        <form action="#/Drawing">
                            <Button className="canvas-button" variant='contained' type="submit">
                                <img src={pic3} alt="Canvas 2" width="100px" height="100px" />
                                <label htmlfor="cId"></label>
                                <input type="hidden" id="cId" name="cId" value="canvas3" />
                            Canvas Name<br></br>User 1 <br></br> 102 Views
                            </Button>
                        </form>
                    </div>
                    <div className="grid-item">
                        <form action="#/Drawing">
                            <Button className="canvas-button" variant='contained' type="submit">
                                <img src={pic4} alt="Canvas 2" width="100px" height="100px" />
                                <label htmlfor="cId"></label>
                                <input type="hidden" id="cId" name="cId" value="canvas4" />
                            Canvas Name<br></br>User 1 <br></br> 102 Views
                            </Button>
                        </form>
                    </div>
                    <div className="grid-item">
                        <form action="#/Drawing">
                            <Button className="canvas-button" variant='contained' type="submit">
                                <img src={pic5} alt="Canvas 2" width="100px" height="100px" />
                                <label htmlfor="cId"></label>
                                <input type="hidden" id="cId" name="cId" value="canvas5" />
                            Canvas Name<br></br>User 1 <br></br> 102 Views
                            </Button>
                        </form>
                    </div>
                    <div className="grid-item">
                        <form action="#/Drawing">
                            <Button className="canvas-button" variant='contained' type="submit">
                                <img src={pic2} alt="Canvas 2" width="100px" height="100px" />
                                <label htmlfor="cId"></label>
                                <input type="hidden" id="cId" name="cId" value="canvas2" />
                            Canvas Name<br></br>User 1 <br></br> 102 Views
                            </Button>
                        </form>
                    </div>


                </div>


            </div>
        </section >
    );
}
