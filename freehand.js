const pencil = document.getElementById("pencil");
let isPencilActive = false;//initialy the pencil is active


const  colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("change", ()=>{
    drawingColor = colorPicker.value;
    console.log("color change");
});

function onPencilClick()
{
    
    pencil.classList.toggle("active");
    isPencilActive = !isPencilActive;
    if(isPencilActive)
    {
        canvas.addEventListener("mousedown",onMouseDown);
        canvas.style.cursor = "crosshair";
    }
    else{
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown",onMouseDown);
    }

}
pencil.addEventListener("click",onPencilClick);