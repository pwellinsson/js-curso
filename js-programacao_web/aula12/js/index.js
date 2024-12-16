/*
  Arrays/Matrizes são como listas em Python.
  Onde dentro de um Array pode ter tanto outros Arrays, como também funções.
  Também existem objetos, Que são muitos parecidos com os dicionários em python.
*/
/*
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

  pessoa.shift(); // Remove o primeiro item do Array.

  pessoa.push("Ferrari"); // Adiciona um item no final do Array.

  pessoa.unshift("Ronaldo"); // Adiciona um item no começo do Array.

  pessoa.splice(1, 1, "Alexandre", "Item 3");
  /*
  1° Posição do item (Baseado no índice).
  2° Itens removidos a partir da posição.
  3° Itens a serem adicionados.
  */
// document.querySelector("p#texto").innerHTML = pessoa.join(" - ");

/* const list = ["Arroz", "Feijão", "Leite", "Macarrão"];
const list2 = ["Suco", "Coca-Cola", "Pizza"];
// const lista = [list, list2];
const lista = list.concat(list2) // Mesmo resultado que linha acima

document.querySelector("p#texto").innerHTML = lista;*/

/*
const jogadores = [
  "Biro Biro",
  "Ribamar",
  "Pelé", // Craques
  "Maradona",
  "Neymar",
  "Cristiano Ronaldo",
  "Vampeta", // Não é mais craque
  "Dimitri",
];

//const jogOrdem = jogadores.sort() // Coloca em ordem alfabética.
const jogMedro = jogadores.sort().reverse(); // Ordem alfabética reversa.

document.querySelector("p#texto").innerHTML = jogMedro;

// const craque = jogadores.slice(2, 6); // Mostra da casa N2 até N6 (Pelé->Crist)

// document.querySelector("p#texto").innerHTML = craque;
*/

const numeros = [40, 100, 1, 5, 25, 10];

/*numeros.sort(function (a, b) {
  return a - b; // (b - a) trará o reverso.
}); // Coloca os números na ordem numérica.

document.querySelector("p#texto").innerHTML = numeros;*/

/*function MaiorNumero(array) {
  // Mostra o maior número da lista.
  return Math.max.apply(null, array);
}

function MenorNumero(array) {
  // Mostra o menor número da lista.
  return Math.min.apply(null, array);
}
document.querySelector("p#texto").innerHTML = MaiorNumero(numeros);*/

const maior20 = numeros.filter(filtragem);

document.querySelector("p#texto").innerHTML = maior20;

function filtragem(value, index, array) {
  return value > 20;
}
