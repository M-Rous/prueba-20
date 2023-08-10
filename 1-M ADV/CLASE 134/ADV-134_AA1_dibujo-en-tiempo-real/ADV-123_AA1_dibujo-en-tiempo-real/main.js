noseX=0;
noseY=0;
difference=0;
rigthWristX=0;
leftWristX=0;
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

function setup() {
    canvas= createCanvas(550,500);
    canvas.position(560,150);
    //video= createCapture(VIDEO);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    //va a obtener el tamaño del canvas 
    //video.size(550,500);
    //creamos el canvas 
    
    //poseNet es predefinida ml5.js
    poseNet= ml5.poseNet(video,modelLoaded);
    // 'pose' obtiene las coordenas de x, y 
    // gotPoses ubica todas las coordenas encontradas 
    poseNet.on('pose', gotPoses);
}
// muestra cambios y objetos en canvas --- cambia el color de fondo 
function draw (){
    background('#BCC2C1 ');
}
// solo imprime en la consola cuando se ejecuta modelLoaded
function modelLoaded(){
    console.log('!poseNet se esta ejecutando');
}
// muestra los resultados de las coordenas de x,y 
function gotPoses(resultados){
    //length obteniendo las coordenas de 
 if (resultados.length>0)
 {
    console.log(resultados);
    noseX = resultados[0].pose.nose.x;
    noseY = resultados[0].pose.nose.y;
    console.log("noseX =" +noseX+ "noseY ="+noseY);
    rigthWristX = resultados[0].pose.rigthWrist.x;
    leftWristX = resultados[0].pose.leftWrist.x;

    difference= floor(leftWristX -rigthWrist);
    console.log(" rigthWristX=" +rigthWristX+ "leftWristX="+leftWristX+ "difference="+ difference);
 }
}
function draw(){
    background('#F5BBAF');
    document.getElementById("square_side").innerHTML="el ancho y alto de mi cuadrado es:"+difference+" px.";
    fill('#F4330A');
    stroke('#152AAA');
    square(noseX,noseY,difference);
}

