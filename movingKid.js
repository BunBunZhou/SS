var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images I am here


var speed = 10;


var kid = new Image();
var bg = new Image();


var bard = new Image();

kid.src = "images/kid.png";
bg.src = "images/bg.png";

bard.src = "images/bardo.png";


var gap = 150;
//var constant = pipeN.height + gap;
//console.log(constant);



var sheetX = 0;
var sheetY = 0;

var kidX = 100;
var kidY =100;

var gravity = 2;

//draw Images

function moveUp() {

    sheetX += 45;
    if(sheetX == 180) {
        sheetX=0;
    }
    kidY -=speed;
}

function moveDown() {

    sheetX += 45;

    if(sheetX == 180) {
        sheetX=0;
    }
    kidY +=speed;
}

function moveLeft() {

    sheetX += 45;
    if(sheetX == 180) {
        sheetX=0;
    }
    kidX -=speed;
}

function moveRight() {

    sheetX += 45;

    if(sheetX == 180) {
        sheetX=0;
    }
    kidX +=speed;
}


function moveForward(direction) {

    sheetX += 45;

    if(sheetX == 180) {
        sheetX=0;
    }

    switch(direction) {
        case 37:    kidX -=speed;
          // code block
          break;
        case 38:    kidY -=speed;
          // code block
          break;
        case 39:    kidX +=speed;
          // code block
          break;
        case 40:    kidY +=speed;
          break;
        default: 
      }
}

//document.addEventListener("keydown",moveUp);

// document.onkeydown = findkey(e);

// function findkey(event) {
//     event.keyCode;
//     console.log('hi');
// }

// document.keydown =(function(e){
//     if (e.keyCode==87) {
//         console.log('sss');
//     }
// })

var lastEvent = 40;

document.addEventListener("keydown", function(event) {

    var currentEvent = event.which;
    
    if(currentEvent == 38) {
        //up
        if(currentEvent != lastEvent) {
            sheetX =0;
            sheetY=68;
            lastEvent = currentEvent;
        }
        moveForward(currentEvent);

    } else if(currentEvent == 37) {
        //left
        if(currentEvent != lastEvent) {
            sheetX =0;
            sheetY=136;
            lastEvent = currentEvent;
        }
        moveForward(currentEvent);
    } else if(currentEvent == 39) {
        //right
        if(currentEvent != lastEvent) {
            sheetX =0;
            sheetY=204;
            lastEvent = currentEvent;
        }
        moveForward(currentEvent);
    } else if(currentEvent == 40) {
        //down
        if(currentEvent != lastEvent) {
            sheetX =0;
            sheetY=0;
            lastEvent = currentEvent;
        }
        moveForward(currentEvent);

    }
  })



function draw() {
    ctx.drawImage(bg,0,0);

    //console.log(kidX + ' ' + kidY);
    ctx.drawImage(kid, sheetX,sheetY, 45,68,kidX,kidY,45,68);

    // for(var i=0; i<pipe.length; i++) {
    //     ctx.drawImage(pipeN,pipe[i].x,pipe[i].y);
    //     ctx.drawImage(pipeS,pipe[i].x,pipe[i].y+constant);

    //     pipe[i].x--;

    //     if(pipe[i].x == 125) {
    //         console.log(pipe.length);
    //         pipe.push({
    //             x : cvs.width,
    //             y : Math.random() * pipeN.height - pipeN.height
    //         });
    //     }

    //     if(bx + bird.width >= pipe[i].x 
    //         && bx <=pipe[i].x * pipeN.width
    //         && (bY <= pipe[i].y + pipeN.height
    //             || bY + bird.height >= pipe[i].y + constant)
    //         ) {
    //                 location.reload();
    //     } else if(bY + bird.height >= (cvs.height - fg.height) ){
    //         location.reload();
    //         console.log(fg.y);
    //     }




    // }





    // ctx.drawImage(fg,0,cvs.height - fg.height);
    // ctx.drawImage(bird,bx,bY);

    // bY +=gravity;

    requestAnimationFrame(draw); 
}

draw();

