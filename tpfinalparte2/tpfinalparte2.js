//https://youtu.be/5D19NKHMtt4
//Salgueiro Valentina 119138/1

let juego;
let imgFondo = [];
let imgPeter = [];
let imgGarfio = [];
let musica;
let sonidoGolpe;

function preload() {

  miFuente = loadFont("./data/peterpan.ttf");

  soundFormats('mp3');
  musica = loadSound('./data/musicaFondo.mp3');
  sonidoGolpe = loadSound('./data/GolpeGarfio.mp3');

  for (let i = 0; i < 3; i++) {
    imgPeter[i] = loadImage("data/peterpan_" + i + ".png");
  }

  for (let i = 0; i < 3; i++) {
    imgGarfio[i] = loadImage("data/garfio_" + i + ".png");
  }

  for (let i = 0; i < 4; i++) {
    imgFondo[i] = loadImage("data/fondo_" + i + ".png");
  }
}


function setup() {
  createCanvas(640, 480);
  textFont(miFuente);
  juego = new Juego();
  juego.iniciar();
}


function draw() {
  background(220);
  juego.actualizar();
  juego.dibujar();
}

function mousePressed() {
  juego.mousePresionado();
}

function keyPressed() {
  juego.teclaPresionada();
}

function keyReleased() {
  juego.teclaSoltada();
}

