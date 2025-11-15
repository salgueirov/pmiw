class Juego {
  constructor() {
    this.estado = "inicio";
    this.peterpan = new Peterpan(50, 200);
    this.garfio = new Garfio(350, 200);
    this.barra1 = new BarraVida(50, 50, 200, 20, color(0, 255, 0));
    this.barra2 = new BarraVida(width - 250, 50, 200, 20, color(255, 0, 0));
    this.juegoTerminado = false;
    this.musicaReproducida = false;
    this.musicaFondo = new MusicaFondo();
  }

  iniciar() {
    this.juegoTerminado = false;
    this.peterpan = new Peterpan(50, 200);
    this.garfio = new Garfio(350, 200);
    this.barra1 = new BarraVida(50, 50, 200, 20, color(0, 255, 0));
    this.barra2 = new BarraVida(width - 250, 50, 200, 20, color(255, 0, 0));
    this.estado = "inicio";
  }

  actualizar() {
    if (this.estado === "jugando" && !this.juegoTerminado) {

      // Actualizar luchadores
      this.peterpan.actualizar(this.garfio);
      this.garfio.actualizar(this.peterpan);

      // Detectar si alguno perdió
      if (this.peterpan.vida <= 0 || this.garfio.vida <= 0) {
        this.juegoTerminado = true;
        this.estado = "fin";
      }
    }

    this.musicaReproducida = this.musicaFondo.controlar(musica, this.musicaReproducida);
  }

  dibujar() {
    if (this.estado === "inicio") {
      this.mostrarInicio();
    } else if (this.estado === "instrucciones") {
      this.mostrarInstrucciones();
    } else if (this.estado === "jugando") {
      this.mostrarJuego();
    } else if (this.estado === "fin") {
      this.mostrarFinal();
    }
    this.musicaFondo.dibujar();
  }

  mousePresionado() {
    this.musicaFondo.mousePresionado();
  }


  mostrarInicio() {
    image(imgFondo[0], 0, 0, width, height);
    noStroke();
    fill(0, 80);
    rect(0, 440, width, 30);
    textAlign(CENTER);
    fill(255);
    textSize(16);
    text("Presioná ENTER para comenzar", width / 2, 450);
  }

  mostrarInstrucciones() {
    image(imgFondo[1], 0, 0, width, height);
    textAlign(CENTER);
    fill(0);

    textSize(32);
    text("Instrucciones", width/2, 170);

    textSize(20);
    text("¿Cómo jugar?", width/2, 200);

    textSize(18);
    text("Peter Pan (Jugador 1)\n <- -> | K bloquear | L atacar", width/2, 240);
    text("Garfio (Jugador 2)\n A D | G bloquear | F atacar", width/2, 300);

    noStroke();
    fill(0, 80);
    rect(0, 440, width, 30);
    fill(255);
    textSize(16);
    text("Presioná ENTER para continuar", width / 2, 450);
  }

  mostrarJuego() {
    image(imgFondo[2], 0, 0, width, height);
    // Dibujar barras de vida
    stroke(0);
    fill(0, 255, 0);
    rect(50, 50, this.peterpan.vida * 2, 20);
    fill(255, 0, 0);
    rect(width - 250, 50, this.garfio.vida * 2, 20);
    noStroke();
    textAlign(CENTER);
    fill(255);
    textSize(16);
    text("Peter Pan", 90, 40);
    text("Garfio", 560, 40);

    // dibujar luchadores
    this.peterpan.dibujar();
    this.garfio.dibujar();
  }

  mostrarFinal() {
    image(imgFondo[3], 0, 0, width, height);
    textAlign(CENTER);
    textSize(32);
    fill(0);
    if (this.peterpan.vida <= 0 && this.garfio.vida <= 0) {
      text("¡Empate!", width / 2, 160);
    } else if (this.peterpan.vida <= 0) {
      text("¡Gana Garfio!", width / 2, 160);
    } else if (this.garfio.vida <= 0) {
      text("¡Gana Peter Pan!", width / 2, 160);
    }

    textSize(16);
    text("Minijuego inspirado en Peter Pan", width / 2, 210);
    text("de J. M. Barrie", width / 2, 230);

    textSize(12);
    fill(80);
    text("Valentina Salgueiro 119138/1", width / 2, 270);
    text("Luz Moccero 120346/4", width / 2, 290);

    noStroke();
    fill(0, 80);
    rect(0, 440, width, 30);
    fill(255);
    textSize(16);
    text("Presioná R para reiniciar", width / 2, 450);
  }


  teclaPresionada() {
    if (this.estado === "inicio" && keyCode === ENTER) {
      this.estado = "instrucciones";
      return;
    }

    if (this.estado === "instrucciones" && keyCode === ENTER) {
      this.estado = "jugando";
      return;
    }

    // Reiniciar desde pantalla final
    if (this.estado === "fin" && (key === 'r' || key === 'R')) {
      this.iniciar();
      return;
    }

    // Controles durante juego
    if (this.estado === "jugando") {
      this.peterpan.teclaPresionada();
      this.garfio.teclaPresionada();
    }
  }

  teclaSoltada() {
    if (this.estado === "jugando") {
      this.peterpan.teclaSoltada();
      this.garfio.teclaSoltada();
    }
  }
}
