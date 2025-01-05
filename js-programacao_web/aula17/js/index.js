/** CLASSES EM JS

 */

class Carro {
  constructor(marca, modelo, ano, data_cadastro = new Date().getFullYear()) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.data_cadastro = data_cadastro;
  }
}

const uno = new Carro("Fiat", "Uno", 2002);
const lanborguini = new Carro("Lamborguini", "", 2020);

console.log(uno);
