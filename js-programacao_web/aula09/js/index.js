/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um método é uma função colocada em uma propriedade.

Parecido com as classes e também com listas em python. Até os métodos e atributos(propriedade)
*/

const carro = {
  marca: "ford",
  modelo: "f15",
  ano: 2015,
  placa: "ACB-3421",
  buzina: function () {
    alert("Biiiiiiiiiiiii");
  },
  completo: function () {
    return `A marca é ${this.marca} e o modelo é ${this.modelo}`;
  },
};

console.log(carro["completo"]);
