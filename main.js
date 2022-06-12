noseX =0;
noseY =0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet= ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    background("yellow");
    document.getElementById("square_sides").innerHTML = "Height and Width of the square will be =  "+ difference + "px";
    fill("orange");
    stroke("orange");
    square(noseX , noseY , difference);
}
function modelLoaded()
{
    console.log("poseNet is inisialised");
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x =" + noseX + " , Nose y ="+ noseY );
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.rightWrist.y;
        difference = floor (leftWristX - rightWristX);
        console.log("rightwrist X = "+ rightWristX + " , leftwrist X = " + leftWristX + ", difference = "+ difference);
    }
}