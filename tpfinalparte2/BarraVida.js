class BarraVida {
  constructor(x, y, anchoMaximo, alto, colorBarra) {
    this.x = x;
    this.y = y;
    this.anchoMaximo = anchoMaximo;
    this.alto = alto;
    this.colorBarra = colorBarra;
  }

  dibujar(vidaActual) {
    noFill();
    stroke(0);
    rect(this.x, this.y, this.anchoMaximo, this.alto);
    
    noStroke();
    fill(this.colorBarra);

    let anchoVida = (vidaActual / 100) * this.anchoMaximo;

    rect(this.x, this.y, anchoVida, this.alto);
  }
}
