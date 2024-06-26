function setup() {
  createCanvas(400, 400);
  background("lightgrey");

  // Definindo a fonte como Arial
  textFont("Arial");
  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Escrevendo "Alura" no centro do canvas
  fill(0); // Cor preta para o texto
  text("Alura", width / 2, height / 2);
}
