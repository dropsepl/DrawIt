var canvas = document.getElementById('canvas');

if (canvas.getContext) {
    var mouseClicked = false;
    var ctx = canvas.getContext('2d');
    ctx.beginPath();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.onmousedown = (function(e){
        mouseClicked = true;
        paint(e.clientX, e.clientY, false);
    });

    canvas.onmousemove = (function(e){
        if (mouseClicked) {
            paint(e.clientX , e.clientY , true);
        }
    });

    canvas.onmouseup = (function(e){
        mouseClicked = false;
    });

    canvas.onmouseleave = (function(e){
        mouseClicked = false;
    });
}

function paint(currentX, currentY, clicked) {
  if (clicked) {
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = color;
     if(color == "white") {
        ctx.lineWidth = 13;
    } else {
        ctx.lineWidth = 7;
    }
    ctx.closePath();
    ctx.stroke();
  }
  posX = currentX; posY = currentY;
}

var color = "#2B2B2B";

function chooseColor(colors) {    
    switch(colors.id) {
        case "black":
            color = "#2B2B2B";
        break;
        case "grey":
            color = "#595959";
        break;
        case "brown":
            color = "#704C31";
        break;
        case "pink":
            color = "#B500C0";
        break;
        case "darkblue":
            color = "#1C25C0";
        break;
        case "blue":
            color = "#06B7C0";
        break;
        case "green":
            color = "#76CF02";
        break;
        case "yellow":
            color = "#DEC402";
        break;
        case "orange":
            color = "#CD6002";
        break;
        case "red":
            color = "#CD0402";
        break;
        default:
            color = "#2B2B2B";
    }
}

function brush() {
    color = "#2B2B2B";
}

function eraser() {
    color = "white";
}

function clearCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}