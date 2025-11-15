class MusicaFondo {
  constructor() {
    this.activa = true;
    this.x = 10;
    this.y = height - 40;
    this.ancho = 120;
    this.alto = 30;
  }

  dibujar() {
    // Dibujar botón
    fill(this.activa ? color(76, 175, 80) : color(244, 67, 54));
    stroke(0);
    rect(this.x, this.y, this.ancho, this.alto, 5);

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(12);
    let texto = this.activa ? "Música: ON" : "Música: OFF";
    text(texto, this.x + this.ancho/2, this.y + this.alto/2);
  }

  mousePresionado() {
    // Verificar si se hizo clic en el botón
    if (mouseX >= this.x && mouseX <= this.x + this.ancho &&
      mouseY >= this.y && mouseY <= this.y + this.alto) {
      this.activa = !this.activa;
      return true;
    }
    return false;
  }

  controlar(musica, musicaReproducida) {
    if (this.activa && musica && !musicaReproducida) {
      if (!musica.isPlaying()) {
        musica.play();
      }
      return true;
    }

    if (!this.activa && musica && musica.isPlaying()) {
      musica.stop();
    }
    return false;
  }
}
