// Función para calcular la distancia entre dos puntos 
function calcularDistancia(x1, y1, x2, y2) {
  let distancia = dist(x1, y1, x2, y2);
  return distancia;
}

// Función para dibujar un cuadrado con círculos
function dibujarCuadradoConCirculos(x, y, tam, colorCu, colorCir, arribaIzq, arribaD, abajoIzq, abajoD) {
  fill(colorCu);
  rect(x, y, tam, tam);

  fill(colorCir);
  let offset = tam * 0.2;
  let diametro = tam * 0.28;

  if (arribaIzq) {
    ellipse(x + offset, y + offset, diametro, diametro);
  }
  if (arribaD) {
    ellipse(x + tam - offset, y + offset, diametro, diametro);
  }
  if (abajoIzq) {
    ellipse(x + offset, y + tam - offset, diametro, diametro);
  }
  if (abajoD) {
    ellipse(x + tam - offset, y + tam - offset, diametro, diametro);
  }
}
