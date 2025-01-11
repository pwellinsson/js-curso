/** JSON *

De modo simples, JSON é uma forma de converter um objeto em texto e vice-versa.

Usado principalmente para transmitir dados entre sistemas de forma simple, já que o formato de texto é lido por praticamente toda linguagem de programação.

Utilizamos dois métodos para trabalhar com JSON no JS:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringfy() - Converte objetos em texto padrão JSON
*/

/*
const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2001,
  motor: ["1.6", "1.4", "1.0"],
};

// Converteu para texto JSON
let texto = JSON.stringify(carro);

// document.querySelector("pre#area").innerHTML = carro;
// Colocou o texto no nosso HTML
document.querySelector("pre#area").innerHTML = texto;

// Convertendo texto em objeto
let obj = JSON.parse(texto);

// Pegamos um valor deste objeto
console.log(obj.modelo);

console.log(obj.motor[1]);
*/

function buscarCEP() {
  let input = document.querySelector("input#cep").value;
  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://viacep.com.br/ws/" + input + "/json/");
  ajax.send();

  ajax.onload = function () {
    // document.querySelector("p#texto").innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    document.querySelector(
      "p#texto"
    ).innerHTML = `<h2>Informações do CEP</h2>Logradouro: ${obj.logradouro} <br>Bairro: ${obj.localidade} <br>Estado: ${obj.uf}.`;
  };
}

/*
const ajax = new XMLHttpRequest();
ajax.open("GET", "https://viacep.com.br/ws/85802000/json/");
ajax.send();

ajax.onload = function () {
  document.querySelector("pre#area").innerHTML = this.responseText;
  let obj = JSON.parse(this.responseText);
  alert(`O DDD é: ${obj.ddd}`);
};
*/
