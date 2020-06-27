var box, boxSecond;

function setup(){
    createCanvas(400, 400);
    boxSecond = new Box(200, 200, 50, 50);
}

function draw(){
    background(255, 255, 255);

    //This is the box which has undefined properties
    box = rect(100, 200, 50, 50);
    console.log("box : "+box);

    //This is the box which has defined properties
    boxSecond.display();
    console.log("boxSecond : "+boxSecond.x+" "+boxSecond.y);

}