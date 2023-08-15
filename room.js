objects = [];
var Status = false;
function preload(){
    img2 = loadImage("carro.jpg");
}
function setup(){
    canvas = createCanvas(img2.width,img2.height);
    objectDetector = ml5.objectDetector("cocossd",modelLoaded)
}
function draw(){
    image(img2,0,0,img2.width,img2.height);
    fill("#ff0000");
    noFill()
    stroke("#ff0000");
    if (Status == true){
        for (i = 0; i < objects.length; i++){
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            text(objects[i].label,objects[i].x +10,objects[i].y+10);
            text(Number(objects[i].confidence).toFixed(2),objects[i].x +10,objects[i].y+20);
            document.getElementById("status").innerHTML = "detectando " + objects.length + " objetos";
        }
    }
}
function modelLoaded(){
    console.log("model loaded!");
    Status = true;
    objectDetector.detect(img2,gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}