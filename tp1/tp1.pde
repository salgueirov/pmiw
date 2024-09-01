//Salgueiro Valentina legajo 119138/1

PImage img;
int i=0;
int j=0;

void setup() {
  size(800,400);
  img = loadImage("n3.jpg");
}

void draw() {
  background(0);
  image(img, 0, 0, 400, 400); 
  translate (400,0);
  
  for (int i = 0; i < 5; i++) { 
    for (int j = 0; j < 5; j++) {
      float distancia = dist(width/4, height/2, width/4 + i*75, height/2 + j*75);
      float diametro = 400 - distancia * 0.8;
      fill(255);
      ellipse(width/4 + i, height/2 + j, diametro, diametro);
      fill(0);
      rectMode(CENTER);
      rect(width/4 + i, height/2 + j, diametro*0.7, diametro*0.7);
    }
  }
}
