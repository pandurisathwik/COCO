img = "";
status="";
function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420)
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    rect(30, 60, 450, 350);
    stroke("#FF0000");

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);

}

function modelLoaded(){
    console.log("Model is Loaded...");
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
if(error){
    console.error();
}
console.log(results);
}
