img="";
stat=""
objectDector="";
objects = [];

function preload(){
}

function setup(){
canvas = createCanvas(380,380);
canvas.center();

video = createCapture(VIDEO);
video.hide();

objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Object dectecting";
}

function modelLoaded(){
    console.log('Model is loaded');
    stat = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }

    console.log(results);
    objects=results;
}

function draw(){
image(video,0,0,380,380);

if(stat==true){
for(var i=0;i<objects.length; i++){
document.getElementById('status').innerHTML = "Status: Object dectected";


fill('red');

stroke('red');
percent = floor(objects[i].confidence * 100);

text(objects[i].label+ " "+ percent+ " % ", objects[i].x +15 , objects[i].y +15);
noFill();
stroke('red');
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
document.getElementById('num').innerHTML = objects.length;

}
}


}