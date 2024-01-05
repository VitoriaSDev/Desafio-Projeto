// Desafio Classificador de Nível Herói

let nomeHeroi = "MugSama";
let experienciaHeroi = 7851;
let rankingHeroi = '';

switch (true) {
    case (experienciaHeroi < 1000):
      rankingHeroi = "Ferro";
      break;
    case (experienciaHeroi >= 1001 && experienciaHeroi <= 2000):
      rankingHeroi = "Bronze";
      break;
    case (experienciaHeroi >= 2001 && experienciaHeroi <= 5000):
      rankingHeroi = "Prata";
      break;
    case (experienciaHeroi >= 5001 && experienciaHeroi <= 7000):
      rankingHeroi = "Ouro";
      break;
    case (experienciaHeroi >= 7001 && experienciaHeroi <= 8000):
      rankingHeroi = "Platina";
      break;
    case (experienciaHeroi >= 8001 && experienciaHeroi <= 9000):
      rankingHeroi = "Ascendente";
      break;
    case (experienciaHeroi >= 9001 && experienciaHeroi <= 10000):
      rankingHeroi = "Imortal";
      break;
    case (experienciaHeroi <= 10001):
      rankingHeroi = "Radiante";
      break;
    default:
      break;
  }

console.log("O Herói " + nomeHeroi + "está no nível " + rankingHeroi);
