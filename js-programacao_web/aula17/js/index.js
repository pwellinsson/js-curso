/** CLASSES EM JS:

 * Parecido com classes em Python.
*/

class Carro {
  constructor(marca, modelo, ano, data_cadastro = new Date().getFullYear()) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.data_cadastro = data_cadastro;
  }

  buzinar() {
    return `${this.modelo} buzinou!`;
  }
}

const uno = new Carro("Fiat", "Uno", 2002);
const lanborguini = new Carro("Strogonnof", "Lamborguini", 2101, 2019);

console.log(uno);
console.log(lanborguini);
console.log("Data de Cadastro: " + uno.data_cadastro);

console.log(lanborguini.buzinar());

lanborguini.ano = 2002;
console.log("Lanborguini atualizado: ", lanborguini);
