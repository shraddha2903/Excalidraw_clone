function toggleMySideNav()
{
        const myBlock = document.getElementById("my_side_nav_content");
        // const toggleButton = document.getElementById("my_toggle_button");

        // toggleButton.addEventListener("click", function () {
            if (myBlock.style.display == 'block') {
                myBlock.style.display = 'none';
            } else {
                myBlock.style.display = 'block';
            }
        // });
    
}

document.getElementById("openSideNav").addEventListener("click",function(){
    const myBlock = document.getElementById("my_side_nav_content");
    // toggleMySideNav();
    if (myBlock.style.display == 'block') {
        myBlock.style.display = 'none';
    } else {
        myBlock.style.display = 'block';
        
    }
});

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// function drawLine(p1,p2,color,thickness = 2)
// {
//     ctx.beginPath();
//     ctx.strokeStyle = color;
//     ctx.lineWidth = thickness;
//     ctx.moveTo(p1.x,p1.y);
//     ctx.lineTo(p2.x,p2.y);
//     ctx.stroke();
//     ctx.closePath();
// }

// drawLine({x:100,y:50},{x:90,y:200},"red",3);

// function onMouseDown(event)
// {
//     let {clientX,clientY} = event;
//     ctx.beginPath();
//     ctx.moveTo(clientX,clientY);
//     ctx.strokeStyle = "blue";
//     ctx.lineWidth = 4;
    
//     // ctx.stroke();
    
// }

// function onMouseUp(event)
// {
//     let {clientX,clientY} = event;
    
//     ctx.lineTo(clientX,clientY);
//     ctx.strokeStyle = "blue";
    
//     ctx.stroke();
//     ctx.closePath();
// }

// canvas.addEventListener("mousedown",onMouseDown);
// canvas.addEventListener("mouseup",onMouseUp);


//continues line drawing
// ctx.beginPath();
// ctx.strokeStyle="red";
// ctx.lineWidth=4;
// ctx.moveTo(100,100);
// ctx.lineTo(300,100);
// ctx.stroke();
// ctx.closePath();


// ctx.beginPath();
// ctx.moveTo(300,100);
// ctx.lineTo(350,300);
// ctx.strokeStyle="blue";
// ctx.lineWidth=1;

// ctx.stroke();


// ctx.beginPath();
// ctx.moveTo(200,300);
// ctx.lineTo(400,100);

// ctx.globalAlpha = 1;
// /* 
// properties of stroke
// 1- strokeStyle=> take color
// 2-lineWidth=thickness of line
// */

// ctx.strokeStyle = "blue";
// ctx.lineWidth = 4;
// ctx.stroke();//draw the line with black color
// ctx.closePath();


// ctx.fillStyle="#8322b9";
// ctx.fillRect(20,20,150,75);


//FREE HAND DRAWING
// canvas.addEventListener("mousedown",onMouseDown);

let previousPosition = null;
let drawingColor = "blue";


function onMouseDown(event)
{
    // console.log("mouse down");
    
    let {clientX:x,clientY:y} = event;
    previousPosition = [x,y];

    //add mousemove event and mpuseup event
    
canvas.addEventListener("mousemove",onMouseMove);
canvas.addEventListener("mouseup",onMouseUp);
}

function onMouseMove(event)
{
//    console.log("mousemove");
   ctx.strokeStyle=drawingColor;
   let currenPosition = [event.clientX,event.clientY];

   //draw line from previous position to current position
   ctx.beginPath();
   ctx.moveTo(...previousPosition);
   ctx.lineTo(...currenPosition);
   ctx.stroke();
   ctx.closePath();
   previousPosition=currenPosition;
}

function onMouseUp(event)
{
    // console.log("mouseup");
    //we need to remove mouse move listenor after mouse up

    canvas.removeEventListener("mousemove",onMouseMove);
}