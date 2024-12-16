/*
  Arrays/Matrizes são como listas em Python.
  Onde dentro de um Array pode ter tanto outros Arrays, como também funções.
  Também existem objetos, Que são muitos parecidos com os dicionários em python.
*/

let list = ["Batata", "Cenoura", "Beterraba", "Maça"];
// let list = new Array("Batata", "Cenoura", "Beterraba", "Maça");
let list2 = [];
// Mudando valor de uma lista ou adicionando valor à uma lista/Array.
list2[0] = "abacate";
list2[1] = "Jabuticaba";
list2[2] = "Berinjela";
list2[3] = "Alcassuz";

list[1] = "Couve-Flor";

console.log(list[1]); // Mostrar 1 Valor da lista.
console.log(list); // Mostrar a quantidade de itens no Array e todos os itens da lista.

const pessoa = ["Dimitri", "Texeira", 30, "Professor"]; // Array (Lista)
pessoa.pop(); // Remove o último item do Array.

pessoa.shift() // Remove o primeiro item do Array.

pessoa.push("Ferrari") // Adiciona um item no final do Array.

pessoa.unshift("Ronaldo") // Adiciona um item no começo do Array.

document.querySelector("p#texto").innerHTML = pessoa.join(" - ");
