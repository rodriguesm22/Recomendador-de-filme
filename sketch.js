

let campoIdade;
let campoDrama;
let campoRomance;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de drama?");
  campoAventura = createCheckbox("Gosta de romance?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeRomance = campoRomance.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeDrama, gostaDeRomance);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama, gostaDeRomance) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O Pequeno Príncipe";
    } else {
      if (idade >= 12) {
        if(gostaDeDrama || gostaDeRomance) {
          return "A Noiva Cadáver";          
        } else{
         return "D.P.A";
        }
      } else {
        if (gostaDeRomance) {
          return "Meninas Não Choram";
        } else {
          return "Modo Avião";
        }
      }
    }
  } else {
    if (gostaDeDrama) {
      return "Depois do Universo";
    } else {
      return "Viva: A Vida É Uma Festa";
    }
  }
}
