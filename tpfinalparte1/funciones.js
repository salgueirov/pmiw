
function mostrarPantalla() {
  // Mostrar imagen de fondo
  image(imgHistoria[pantallaActual], 0, 0, width, height);

  // Mostrar diálogo, si corresponde
  if (pantallaActual >= 1 && pantallaActual <= 16) {
    fill(100, 140);
    noStroke();
    rect(0, 350, width, 200);
    fill(255);
    textAlign(CENTER);
    textSize(14);
    text(dialogos[pantallaActual], 70, 370, 500, 80);
  }

  // Pantalla de inicio
  if (pantallaActual == 0) {
    mostrarBoton("EMPEZAR", 500, 250, 150, 40);
    mostrarBoton("CRÉDITOS", 500, 310, 150, 40);
  }

  // Mostrar botones "Sí / No" en pantallas con decisiones
  if (pantallaActual == 1 || pantallaActual == 2 ||  pantallaActual == 3 || pantallaActual == 5 || pantallaActual == 10 || pantallaActual == 12) {
    mostrarBoton("Sí", botonSiX, botonY, botonAncho, botonAlto);
    mostrarBoton("No", botonNoX, botonY, botonAncho, botonAlto);
  }

  if (pantallaActual == 14 || pantallaActual == 15 || pantallaActual == 16) {
    mostrarBoton("Volver a empezar", botonSiX, botonY, 130, botonAlto);
    mostrarBoton("Créditos", botonNoX, botonY, 130, botonAlto);
  }


  // Pantalla de créditos
  if (pantallaActual == 17) {
    push();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(18);
    text("Historia basada en Peter Pan de J. M. Barrie", width / 2 - 135, height / 2 - 20, 270, 60);
    textSize(12);
    text("Valentina Salgueiro 119138/1", width / 2 - 135, height / 2 + 40, 270, 30);
    text("Luz Moccero 120346/4", width / 2 - 135, height / 2 + 60, 270, 30);
    mostrarBoton("Inicio", width/2, 420, 150, botonAlto);
    pop();
  }
}


//botones si o no
function mostrarBoton(texto_, x_, y_, ancho_, alto_ ) {
  push();
  translate(x_, y_);
  rectMode(CENTER);
  
  stroke(0);
  strokeWeight(1);

  // cambia de color si el mouse está sobre el botón
  if (colisionRectangular(x_, y_, ancho_, alto_)) {
    fill(0, 150, 0); // color cuando el mouse está encima
  } else {
    fill(0, 100, 0); // color normal
  }
  rect(0, 0, ancho_, alto_);
  noStroke();
  fill(255);
  textSize(12);
  textAlign(CENTER, CENTER);
  text(texto_, 0, 0);
  pop();
}

//click en el boton
function colisionRectangular( x_, y_, ancho_, alto_ ) {
  if ( mouseX>x_-ancho_/2 && mouseX<x_+ancho_/2 && mouseY>y_-alto_/2 && mouseY<y_+alto_/2 ) {
    return true;
  } else {
    return false;
  }
}
