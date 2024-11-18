/* No JavaScript temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
*/

/*
// Declaração de Variáveis
var nome, sobrenome, nome_completo, idade;

// Atribuição dos Valores

nome = "Dimitri";
sobrenome = "Teixeira";
idade = 30;
nome_completo = nome + " " + sobrenome;

pessoa = idade + nome;

document.querySelector("p#Texto").innerHTML = nome_completo;
// console.log(nome_completo);
*/

let x = 100;

{
    let x = 12;
}

document.querySelector("p#Texto").innerHTML = x;