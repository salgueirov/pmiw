let pantallaActual = 0;
let CantPantalla = 17;
let imgHistoria = [];
let CantidadDeImg = 17;
let dialogos;
let botonSiX = 220;
let botonNoX = 420;
let botonY = 440;
let botonAncho = 60;
let botonAlto = 35;
let miFuente;
let musica;
let sonidoClick;

function preload() {
  soundFormats('mp3', 'ogg');
  musica = loadSound('./data/Flying.mp3');
  sonidoClick = loadSound('./data/click.mp3');
  miFuente = loadFont("./data/peterpan.ttf");
  for (let i=0; i<18; i++) {
    imgHistoria[i] = loadImage("./data/peterpan_"+nf(i, 2)+".png");
  }
  dialogos = loadStrings("./data/peterpan_dialogos.txt");
}

function setup() {
  createCanvas (640, 480);
  textFont(miFuente);
}


function draw() {
  background (0);
  mostrarPantalla();
}

function mousePressed() {

  // suena el click cada vez
  if (sonidoClick && sonidoClick.isLoaded()) {
    sonidoClick.play();
  }

  // muisca de fobdo
  if (pantallaActual === 0) {
    // si estás en pantalla de inicio -- detener música
    if (musica.isPlaying()) {
      musica.stop();
    }
  } else {
    // si no está sonando -- reproducir en bucle
    if (!musica.isPlaying()) {
      musica.loop();
    }
  }

  //pantalla de inicio
  if (pantallaActual == 0) {
    if (colisionRectangular(500, 250, 150, 40)) {
      pantallaActual = 1; //empezar
    }
    if ( colisionRectangular(500, 310, 150, 40)) {
      pantallaActual = 17; //creditos
    }
  } else if (pantallaActual == 1) {
    if ( colisionRectangular(botonSiX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 2;
    } else if ( colisionRectangular(botonNoX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 14;
    }
  } else if (pantallaActual == 2) {
    if ( colisionRectangular(botonSiX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 11;
    } else if ( colisionRectangular(botonNoX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 3;
    }
  } else if (pantallaActual == 3) {
    if ( colisionRectangular(botonSiX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 4;
    } else if ( colisionRectangular(botonNoX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 6;
    }
  } else if (pantallaActual == 4 || pantallaActual == 6 || pantallaActual == 7 || pantallaActual == 8 || pantallaActual == 9 || pantallaActual == 11) {
    pantallaActual = pantallaActual + 1;
  } else if (pantallaActual == 5) {
    if ( colisionRectangular(botonSiX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 16;
    } else if ( colisionRectangular(botonNoX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 8;
    }
  } else if (pantallaActual == 12) {
    if ( colisionRectangular(botonSiX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 13;
    } else if ( colisionRectangular(botonNoX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 4;
    } else if (pantallaActual == 9) {
      pantallaActual = 10;
    }
  } else if (pantallaActual == 13) {
    pantallaActual = 9;
  } else if (pantallaActual == 10) {
    if ( colisionRectangular(botonSiX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 15;
    } else if ( colisionRectangular(botonNoX, botonY, botonAncho, botonAlto) ) {
      pantallaActual = 14;
    }
  } else if (pantallaActual == 14 || pantallaActual == 15 || pantallaActual == 16) {
    if (colisionRectangular(botonSiX, botonY, 130, botonAlto)) {
      pantallaActual = 0; // Volver a empezar
      musica.stop();
    } else if (colisionRectangular(botonNoX, botonY, 130, botonAlto)) {
      pantallaActual = 17; // Ir a créditos
    }
  } else if (pantallaActual == 17) {
    if (colisionRectangular(width/2, 420, 150, 40)) {
      pantallaActual = 0;

      musica.stop();
    }
  }
}
