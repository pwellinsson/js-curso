/* Laço de Repetição For
Laços oferecem uma maneira de executar um bloco de código várias vezes.

*/

function InsereNum() {
  console.log("Início do laço, Safe!");
  //  (Valor inicial; Condição; Execução)
  for (let i = 10; i < 10001; i++) {
    if (i > 10004 || i < 0) {
      console.log("Fim do laço, Safe!");
    }

    document.querySelector("p#texto").innerHTML += `, ${i}`;
  }
}

function TiraNum() {
  document.querySelector("p#texto").innerHTML = "1, 2, 3, 4, 5, 6, 7, 8, 9";
}

for (let i = new Date().getFullYear(); i > 1900; i--) {
  document.querySelector(
    "select#ano"
  ).innerHTML += `<option value='"${i}"'>${i}</option>`;
}

const carro = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];

// document.querySelector("p#texto").innerHTML = carro;
var tamanho = carro.length;

for (let i = 0; i < tamanho; i++) {
  document.querySelector("p#texto").innerHTML += ` ${carro[i]} -`;
}
