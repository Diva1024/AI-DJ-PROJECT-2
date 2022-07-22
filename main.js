var song1="";
var song2="";
function preload(){
song1=loadSound("ATTENTION.mp3");
song2=loadSound("L2R.mp3");
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(530,200);
video=createCapture(VIDEO);
video.hide();

}
function draw(){
image(video,0,0,500,500);
}
function play(){
    song1.play();

}
function stop(){
    song1.stop();
}