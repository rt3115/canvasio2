    var context;

    // Check for the canvas tag onload.
    if (window.addEventListener) {
        console.log("got this far");
        window.addEventListener('load', function () {
            drawing();
            }, false);
    }

    
    function drawing(){
        var canvas, canvaso, contexto;
            // Default tool. (chalk, line, rectangle) 
            var tool;
            var tool_default = 'chalk';
            //eraser items;
            console.log("drawing...");
            function init() {
                canvaso = document.getElementById('drawingCanvas');
                if (!canvaso) {
                    console.log("This is not the correct page...");
                    return;
                }
                if (!canvaso.getContext) {
                    alert('Error! No canvas.getContext!');
                    return;
                }
                // Create 2d canvas. 
                contexto = canvaso.getContext('2d');
                if (!contexto) {
                    alert('Error! Failed to getContext!');
                    return;
                }
                // Build the temporary canvas. 
                var container = canvaso.parentNode;
                canvas = document.createElement('canvas');
                if (!canvas) {
                    alert('Error! Cannot create a new canvas element!');
                    return;
                }


                canvas.id = 'drawingCanvas';
                canvas.width = canvaso.width;
                canvas.height = canvaso.height;
                container.appendChild(canvas);
                context = canvas.getContext('2d');
                context.strokeStyle = "#000000";// Default line color. 
                context.lineWidth = 5.0;// Default stroke weight. 

                // Fill transparent canvas with dark grey (So we can use the color to erase). 

                
                

                //get all the buttons i need to use yay
                var paint_brush_tool = document.getElementById('paint_button');
                var eraser_btn = document.getElementById('eraser_button');
                var line_btn = document.getElementById('line_button');
                var rect_btn = document.getElementById('rect_button');

                var solid_box_btn = document.getElementById('solid_box_button');
                var solid_circle_btn = document.getElementById('solid_circle_button');
                var solid_rect_btn = document.getElementById('solid_rectangle_button');

                var hollow_box_btn = document.getElementById('hollow_box_button');
                var hollow_circle_btn = document.getElementById('hollow_circle_button');
                var hollow_rect_btn = document.getElementById('hollow_rectangle_button');

                var color_picker = document.getElementById('colorPicker');

                //add the listeners
                paint_brush_tool.addEventListener('click', changeToPaint, false);

                color_picker.addEventListener('change', watchColorPicker, false);
                eraser_btn.addEventListener('click', changeToEraser, false);
                line_btn.addEventListener('click', changeToLine, false);
                rect_btn.addEventListener('click', changeToRect, false);

                solid_box_btn.addEventListener('click', changeToSolidBox, false);
                solid_circle_btn.addEventListener('click', changeToSolidCircle, false);
                solid_rect_btn.addEventListener('click', changeToSolidRect, false);

                hollow_box_btn.addEventListener('click', changeToHollowBox, false);
                hollow_circle_btn.addEventListener('click', chnageToHollowCircle, false);
                hollow_rect_btn.addEventListener('click', changeToHollowRect, false);

                //change the tool
                function changeToPaint() {
                    tool = new tools['chalk']();
                    tool_select.value = 'chalk';
                    context.strokeStyle = color_picker.value;
                }

                function changeToLine() {
                    tool = new tools['line']();
                    tool_select.value = 'line';
                    context.strokeStyle = color_picker.value;
                } 

                function changeToRect() {
                    tool = new tools['rect']();
                    tool_select.value = 'rect';
                    context.strokeStyle = color_picker.value;
                }

                function changeToEraser() {
                    tool = new tools['eraser']();
                    tool_select.value = 'eraser';
                }

                function changeToSolidBox() {
                    tool = new tools['solidBox']();
                    tool_select.value = 'solidBox';
                    context.strokeStyle = color_picker.value;
                }

                function changeToSolidCircle(){
                    tool = new tools['solidCircle']();
                    tool_select.value = 'solidCircle';
                    context.strokeStyle = color_picker.value;
                }

                function changeToSolidRect(){
                    tool = new tools['solidRect']();
                    tool_select.value = 'solidRect';
                    context.strokeStyle = color_picker.value;
                }

                function changeToHollowBox(){
                    tool = new tools['hollowBox']();
                    tool_select.value = 'hollowBox';
                    context.strokeStyle = color_picker.value;
                }

                function chnageToHollowCircle(){
                    tool = new tools['hollowCircle']();
                    tool_select.value = 'hollowCircle';
                    context.strokeStyle = color_picker.value;
                }

                function changeToHollowRect(){
                    tool = new tools['hollowRect']();
                    tool_select.value = 'hollowRect';
                    context.strokeStyle = color_picker.value;
                }

                //color picker stuff
                function watchColorPicker(event) {
                    document.querySelectorAll("p").forEach(function (p) {
                        p.style.color = event.target.value;
                        context.strokeStyle = p.style.color;
                    });
                }
            

                function increaseWidth() {
                    context.lineWidth += .5;
                }

                function decreaseWidth() {
                    context.lineWidth -= .5;
                }

                function changeWidth(event){
                    console.log("changing width");
                    document.querySelectorAll("p").forEach(function (p ) {
                        p.style.lineWidth = event.target.value;
                        context.lineWidth = p.style.lineWidth;
                    });
                }

                // Create a select field with our tools. 
                var tool_select = document.getElementById('selector');
                if (!tool_select) {
                    alert('Error! Failed to get the select element!');
                    return;
                }
                tool_select.addEventListener('change', ev_tool_change, false);

                // Activate the default tool (chalk). 
                if (tools[tool_default]) {
                    tool = new tools[tool_default]();
                    tool_select.value = tool_default;
                }
                // Event Listeners. 
                canvas.addEventListener('mousedown', ev_canvas, false);
                canvas.addEventListener('mousemove', ev_canvas, false);
                canvas.addEventListener('mouseup', ev_canvas, false);
            }
            // Get the mouse position. 
            function ev_canvas(ev) {
                if (ev.layerX || ev.layerX === 0) { // Firefox 
                    ev._x = ev.layerX;
                    ev._y = ev.layerY;
                } else if (ev.offsetX || ev.offsetX === 0) { // Opera 
                    ev._x = ev.offsetX;
                    ev._y = ev.offsetY;
                }
                // Get the tool's event handler. 
                var func = tool[ev.type];
                if (func) {
                    func(ev);
                }
            }
            function ev_tool_change(ev) {
                if (tools[this.value]) {
                    tool = new tools[this.value]();
                }
            }
            // Create the temporary canvas on top of the canvas, which is cleared each time the user draws. 
            function img_update() {
                contexto.drawImage(canvas, 0, 0);
                context.clearRect(0, 0, canvas.width, canvas.height);
            }
            var tools = {};
            // Chalk tool. 
            tools.chalk = function () {
                var tool = this;
                this.started = false;

                // Begin drawing with the chalk tool. 
                this.mousedown = function (ev) {
                    context.beginPath();
                    context.moveTo(ev._x, ev._y);
                    tool.started = true;
                };
                this.mousemove = function (ev) {
                    if (tool.started) {
                        context.lineTo(ev._x, ev._y);
                        context.stroke();
                    }
                };
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        img_update();
                    }
                };
            };


            // The rectangle tool. 
            tools.rect = function () {
                var tool = this;
                this.started = false;
                this.mousedown = function (ev) {
                    tool.started = true;
                    tool.x0 = ev._x;
                    tool.y0 = ev._y;
                };
                this.mousemove = function (ev) {
                    if (!tool.started) {
                        return;
                    }
                    // This creates a rectangle on the canvas. 
                    var x = Math.min(ev._x, tool.x0),
                        y = Math.min(ev._y, tool.y0),
                        w = Math.abs(ev._x - tool.x0),
                        h = Math.abs(ev._y - tool.y0);
                    context.clearRect(0, 0, canvas.width, canvas.height);// Clears the rectangle onload. 

                    if (!w || !h) {
                        return;
                    }
                    context.strokeRect(x, y, w, h);
                };
                // Now when you select the rectangle tool, you can draw rectangles. 
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        img_update();
                    }
                };
            };

            //hollow rectangle tool
            tools.hollowRect = function () {
                var tool = this;
                this.started = false;
                this.mousedown = function (ev) {
                    tool.started = true;
                    tool.x0 = ev._x;
                    tool.y0 = ev._y;
                };
                this.mousemove = function (ev) {
                    if (!tool.started) {
                        return;
                    }
                    // This creates a rectangle on the canvas. 
                    var x = Math.min(ev._x, tool.x0),
                        y = Math.min(ev._y, tool.y0),
                        w = Math.abs(ev._x - tool.x0),
                        h = Math.abs(ev._y - tool.y0);
                    context.clearRect(0, 0, canvas.width, canvas.height);// Clears the rectangle onload. 

                    if (!w || !h) {
                        return;
                    }
                    context.strokeRect(x, y, w, h);
                };
                // Now when you select the rectangle tool, you can draw rectangles. 
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        img_update();
                    }
                };
            };

            //solid box
            tools.solidBox = function () {
                var tool = this;
                this.started = false;
                this.mousedown = function (ev) {
                    tool.started = true;
                    tool.x0 = ev._x;
                    tool.y0 = ev._y;
                };
                this.mousemove = function (ev) {
                    if (!tool.started) {
                        return;
                    }
                    // This creates a rectangle on the canvas. 
                    var x = Math.min(ev._x, tool.x0),
                        y = Math.min(ev._y, tool.y0),
                        w = Math.abs(ev._x - tool.x0),
                        h = Math.abs(ev._y - tool.y0);
                    context.clearRect(0, 0, canvas.width, canvas.height);// Clears the rectangle onload. 

                    if (!w || !h) {
                        return;
                    }
                    context.fillRect(x, y, w, w);
                };
                // Now when you select the rectangle tool, you can draw rectangles. 
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        img_update();
                    }
                };
            };

            //hollow box
            tools.hollowBox = function () {
                var tool = this;
                this.started = false;
                this.mousedown = function (ev) {
                    tool.started = true;
                    tool.x0 = ev._x;
                    tool.y0 = ev._y;
                };
                this.mousemove = function (ev) {
                    if (!tool.started) {
                        return;
                    }
                    // This creates a rectangle on the canvas. 
                    var x = Math.min(ev._x, tool.x0),
                        y = Math.min(ev._y, tool.y0),
                        w = Math.abs(ev._x - tool.x0),
                        h = Math.abs(ev._y - tool.y0);
                    context.clearRect(0, 0, canvas.width, canvas.height);// Clears the rectangle onload. 

                    if (!w || !h) {
                        return;
                    }
                    context.strokeRect(x, y, w, w);
                };
                // Now when you select the rectangle tool, you can draw rectangles. 
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        img_update();
                    }
                };
            };

            //solid Rect
            tools.solidRect = function () {
                var tool = this;
                this.started = false;
                this.mousedown = function (ev) {
                    tool.started = true;
                    tool.x0 = ev._x;
                    tool.y0 = ev._y;
                };
                this.mousemove = function (ev) {
                    if (!tool.started) {
                        return;
                    }
                    // This creates a rectangle on the canvas. 
                    var x = Math.min(ev._x, tool.x0),
                        y = Math.min(ev._y, tool.y0),
                        w = Math.abs(ev._x - tool.x0),
                        h = Math.abs(ev._y - tool.y0);
                    context.clearRect(0, 0, canvas.width, canvas.height);// Clears the rectangle onload. 

                    if (!w || !h) {
                        return;
                    }
                    context.fillRect(x, y, w, w);
                };
                // Now when you select the rectangle tool, you can draw rectangles. 
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        img_update();
                    }
                };
            };

            //solid circle
            tools.solidCircle = function () {
                var tool = this;
                this.started = false;
                this.mousedown = function (ev) {
                    tool.started = true;
                    tool.x0 = ev._x;
                    tool.y0 = ev._y;
                    
                    //context.arc(ev._x, ev._y, 10, 0, 2 * Math.PI, true);
                };
                this.mousemove = function (ev) {
                    if (!tool.started) {
                        return;
                    }

                    // This creates a rectangle on the canvas. 
                    var x = Math.min(ev._x, tool.x0),
                        y = Math.min(ev._y, tool.y0),
                        w = Math.abs(ev._x - tool.x0),
                        h = Math.abs(ev._y - tool.y0);


                    context.clearRect(0, 0, canvas.width, canvas.height);// Clears the rectangle onload. 

                    if (!w || !h) {
                        return;
                    }
                    context.beginPath();
                    context.arc(ev._x, ev._y, w, 0, 2 * Math.PI, true);
                    context.fill();
                    
                };
                // Now when you select the rectangle tool, you can draw rectangles. 
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        
                        img_update();
                    }
                };
            };


            //hollow circle
            tools.hollowCircle = function () {
                var tool = this;
                this.started = false;
                this.mousedown = function (ev) {
                    tool.started = true;
                    tool.x0 = ev._x;
                    tool.y0 = ev._y;
                    
                    //context.arc(ev._x, ev._y, 10, 0, 2 * Math.PI, true);
                };
                this.mousemove = function (ev) {
                    if (!tool.started) {
                        return;
                    }

                    // This creates a rectangle on the canvas. 
                    var x = Math.min(ev._x, tool.x0),
                        y = Math.min(ev._y, tool.y0),
                        w = Math.abs(ev._x - tool.x0),
                        h = Math.abs(ev._y - tool.y0);


                    context.clearRect(0, 0, canvas.width, canvas.height);// Clears the rectangle onload. 

                    if (!w || !h) {
                        return;
                    }
                    context.beginPath();
                    context.arc(ev._x, ev._y, w, 0, 2 * Math.PI, true);
                    context.stroke();
                    
                };
                // Now when you select the rectangle tool, you can draw rectangles. 
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        
                        img_update();
                    }
                };
            };

            // The line tool. 
            tools.line = function () {
                var tool = this;
                this.started = false;
                this.mousedown = function (ev) {
                    tool.started = true;
                    tool.x0 = ev._x;
                    tool.y0 = ev._y;
                };
                this.mousemove = function (ev) {
                    if (!tool.started) {
                        return;
                    }
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    // Begin the line. 
                    context.beginPath();
                    context.moveTo(tool.x0, tool.y0);
                    context.lineTo(ev._x, ev._y);
                    context.stroke();
                    context.closePath();
                };
                // Now you can draw lines when the line tool is seletcted. 
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        img_update();
                    }
                };
            };

            //eraser tool
            tools.eraser = function () {
                var tool = this;
                this.started = false;

                context.strokeStyle = "#FFFFFF"

                // Begin drawing with the chalk tool. 
                this.mousedown = function (ev) {
                    context.beginPath();
                    context.moveTo(ev._x, ev._y);
                    tool.started = true;
                };
                this.mousemove = function (ev) {

                    //take 2

                    //item.style.transform = "translate3d(" + ev._x + "px, " + ev._y + "px, 0)";

                    /*
                    //mouse circle stuff
                    context.beginPath();
                    context.arc(ev._x, ev._y, 10, 0, 2 * Math.PI, true);
                    context.fillStyle = "#FF6A6A";
                    context.fill();
                    */
                    if (tool.started) {
                        context.lineTo(ev._x, ev._y);
                        context.stroke();
                    }
                };
                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                        img_update();
                    }
                };


            };
            init();
        
    }

    export default function ForceLoad(){
        console.log("forced loading");
        drawing();
    }

    export function WidthChange(value){
        context.lineWidth = value;
        console.log("did I do something?");
    }