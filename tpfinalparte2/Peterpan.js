class Peterpan {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.velocidad = 5;
    this.vida = 100;
    this.ataque = false;
    this.bloqueo = false;
  }


  dibujar() {
    if (this.bloqueo) {
      image(imgPeter[1], this.posX, this.posY, 250, 250);
    } else if (this.ataque) {
      image(imgPeter[2], this.posX, this.posY, 250, 250);
    } else {
      image(imgPeter[0], this.posX, this.posY, 250, 250);
    }
  }

  actualizar(oponente) {
    if (this.ataque) {
      let distancia = dist(this.posX, this.posY, oponente.posX, oponente.posY);
      if (distancia < 150 && !oponente.bloqueo) {
        oponente.vida -= 1;
        
        if (sonidoGolpe && sonidoGolpe.isLoaded()) {
          // Detener si ya está sonando y volver a empezar
          if (sonidoGolpe.isPlaying()) {
            sonidoGolpe.stop();
          }
          sonidoGolpe.play();
        }
      }
    }
  }

  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.posX = this.posX - 10;
    } else  if (keyCode === RIGHT_ARROW) {
      this.posX = this.posX + 10;
    } else  if (key === 'l' || key === 'L') {
      this.ataque = true; // Atacar
    } else  if (key === 'k' || key === 'K') {
      this.bloqueo = true; // Bloquear
    }
  }

  teclaSoltada() {
    if (key === 'l' || key === 'L') {
      this.ataque = false;
    }
    if (key === 'k' || key === 'K') {
      this.bloqueo = false;
    }
  }
}
