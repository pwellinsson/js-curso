/** JSON *

De modo simples, JSON é uma forma de converter um objeto em texto e vice-versa.

Usado principalmente para transmitir dados entre sistemas de forma simple, já que o formato de texto é lido por praticamente toda linguagem de programação.

Utilizamos dois métodos para trabalhar com JSON no JS:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringfy() - Converte objetos em texto padrão JSON
*/

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
