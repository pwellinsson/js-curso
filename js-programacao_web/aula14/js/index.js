/* Switch and Case
É usado para realizar diferenças ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível, não será executado e o valor padrão será acionado.
*/

function verificaCor() {
  let cor = document.querySelector("input#cor").value;
  cor = cor.toLowerCase();

  switch (cor) {
    case "azul":
      // O que acontece se a expressão for igual a "a"
      document.body.style.backgroundColor = "darkblue";
      break;
    case "vermelho":
      document.body.style.backgroundColor = "darkred";
      // O que acontece se a expressão for igual a "b"
      break;
    case "amarelo":
      document.body.style.backgroundColor = "darkgoldenrod";
      // O que acontece se a expressão for igual a "c"
      break;
    default:
      document.querySelector(
        "p#texto"
      ).innerHTML = `Nenhuma cor disponível para <strong>${cor}</strong>`;
      // O que acontece se a expressão não for igual a nenhum dos casos
      break;
  }
}

function DiaDaSemana() {
  var dia = new Date().getDay();
  const p = document.querySelector("p#texto");

  console.log(dia);

  switch (dia) {
    case 0:
      p.innerHTML = "Domingo";
      break;
    case 1:
      p.innerHTML = "Segunda-feira";
      break;
    case 2:
      p.innerHTML = "Terça-feira";
      break;
    case 3:
      p.innerHTML = "Quarta-feira";
      break;
    case 4:
      p.innerHTML = "Quinta-feira";
      break;
    case 5:
      p.innerHTML = "Sexta-feira";
      break;
    case 6:
      p.innerHTML = "Sábado";
      break;
    default:
      p.innerHTML = "Não sei que dia é...";
      break;
  }
}
