var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(g)
{
    current_position_of_mouse_x = g.clintX - canvas.offsetLeft;
    current_position_of_mouse_y = g.clintY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

var last_position_of_touch_x, last_position_of_touch_y;
var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;
    if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e)
    {
        console.log("my_touchstart");

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;

        last_position_of_touch_x = e.touches[0].clintX - canvas.offsetLeft;
        last_position_of_touch_y = e.touches[0].clintY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e)
    {
        current_position_of_touch_x = e.touches[0].clintX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clintX - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_touch_x = current_position_of_touch_x
        last_position_of_touch_y = current_position_of_touch_y
     

    }

    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }