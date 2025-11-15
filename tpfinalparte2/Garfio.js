class Garfio {
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
      image(imgGarfio[1], this.posX, this.posY, 250, 250);
    } else if (this.ataque) {
      image(imgGarfio[2], this.posX, this.posY, 250, 250);
    } else {
      image(imgGarfio[0], this.posX, this.posY, 250, 250);
    }
  }

  actualizar(oponente) {
    if (this.ataque) {
      let distancia = dist(this.posX, this.posY, oponente.posX, oponente.posY);
      if (distancia < 100 && !oponente.bloqueo) {
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
    if (key === 'a' || key === 'A') {
      this.posX = this.posX - 10;
    } else  if (key === 'd' || key === 'D') {
      this.posX = this.posX + 10;
    } else  if (key === 'f' || key === 'F') {
      this.ataque = true; // Atacar
    } else  if (key === 'g' || key === 'G') {
      this.bloqueo = true; // Bloquear
    }
  }

  teclaSoltada() {
    if (key === 'f' || key === 'F') {
      this.ataque = false;
    }
    if (key === 'g' || key === 'G') {
      this.bloqueo = false;
    }
  }
}
