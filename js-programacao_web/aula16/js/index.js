/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem à exexução do código em intervalos de tempo específicados. Esses intervalos de tempo são chamados de eventos de cronômetro.

Os dois métodos-chaves para usar com JS são:

setTimeout(function, tempo em milisegundos)
-> Executa uma função, após esperar um número específico de milisegundos.

setInterval(function, milliseconds)
-> Executa uma função, repetidamente, em intervalos de tempo específicos.

*/

function AtivarContagem() {
  /*
  time = document.querySelector("h2#tempo");
  time.innerHTML = "Contagem iniciada";
  // Executa apenas 1 vez após o tempo especificado.
  tempo = setTimeout(function () {
    time.innerHTML = "Contagem finalizada";
    // document.body.style.backgroundColor = "red";
  }, 3000);
  */
  tempo = setInterval(function () {
    var cronometro = document.querySelector("h2#tempo").innerHTML;
    var soma = parseInt(cronometro) - 1;
    document.querySelector("h2#tempo").innerHTML = soma;

    if (soma === 0) {
      PararContagem();
      document.querySelector("h2#tempo").innerHTML = "Contagem finalizada";
    }
  }, 10);
}

function PararContagem() {
  // clearTimeout(tempo);
  clearInterval(tempo);
  document.querySelector("h2#tempo").innerHTML = "Parou a contagem";
}
