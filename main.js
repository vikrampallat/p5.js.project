Webcam.set({
    width: 350,
    height:300,
    image_format : 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    save('my_picture.png');
}

function setup()
{
    canvas=createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 230, 150, 220, 200);
    fill(255, 0, 0);
    stroke(255,0 ,0);
    circle(65, 50, 60);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);
    
    fill(255, 0, 0);
    stroke(255,0 ,0);
    circle(65, 430, 60);
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 420, 460, 20);

    fill(255, 0, 0);
    stroke(255,0 ,0);
    circle(580, 50, 60);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(69, 40, 20, 400);

    fill(255, 0, 0);
    stroke(255,0 ,0);
    circle(580, 430, 60);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(550, 40, 20, 400);
}

