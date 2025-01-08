/** MANIPULAÇÃO DE DATAS EM JAVASCRIPT
 */

// Comando básico para pegar a data
let data = new Date();
// console.log(`Data Completa: ${data}`);

// Pegar o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(`Ano atual: ${ano}`);

// Pegar o mês atual - De 0 até 11 sendo 0 Janeiro e 11 Dezembro
let mes = data.getMonth();
// console.log(`Número do mês atual: ${mes + 1}`);

// Mostrar o mês no formato escrito
const mes_ano = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let mes_escrito = mes_ano[data.getMonth()];
console.log(`Mês atual: ${mes_escrito}`);

// Pegar dia do mês - 1 até 31
let dia_mes = data.getDate();
console.log(`Dia da semana atual: ${dia_mes}`);

// Pegar o dia da semana - 0 até 6
let dia_semana = data.getDay();

const dia_da_semana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
let dia_semana_escrito = dia_da_semana[data.getDay()];
console.log(`Dia da semana atual: ${dia_semana_escrito}`);

// Pegar a hora - de 0 até 23
let hora = data.getHours();
console.log(`Hora do dia: ${hora}`);

// Pegar os minutos - de 0 até 59
let minuto = data.getMinutes();
console.log(`Minutos do dia: ${minuto}`);

// Pegar os segundos - de 0 até 59
let segundos = data.getSeconds();
console.log(`Segundos do dia: ${segundos}`);

// Pegar os milisegundos - de 0 até 999
let milisegundos = data.getMilliseconds();
console.log(`Milisegundos do dia: ${milisegundos}`);

// Pegar a data no padrão brasileiro - DIA / MES / ANO
let dataBR = data.toLocaleDateString("pt-br", { dateStyle: "long" });
console.log(`Data no formato Brasileiro: ${dataBR}`);

// Pegar os valores separados
d = new Date();
dia_mes = d.getDate();
mes = d.getMonth();
ano = d.getFullYear();

function addZero(x) {
  return x < 10 ? "0" + x : "" + x;
  // Se o x for menor que zero, retorna string "0x" senão retorna normalmente.
}

let data_padraoBR = `${addZero(dia_mes)}/${addZero(mes + 1)}/${ano}`;
console.log(data_padraoBR);

// Comparar datas - Maior ou menor. EX: Vencimentos.
var hoje = new Date();
var vencimento = new Date(2025, 0, 15); // 15 de jan. de 2025.

if (hoje > vencimento) {
  console.log("Sua conta está vencida!");
} else {
  console.log("Ainda não venceu, tudo certo!");
}

// Diferença entre duas datas em DIAS
var data_inicial = new Date();
var data_final = new Date(2025, 0, 15); // Quantos dias faltam até chegar neste dia

var diferencaTempo = data_final.getTime() - data_inicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

// console.log(`${data_inicial} \n${data_final} \n${diferencaTempo} \n${diferencaDias}`)
console.log(`Diferença de dias: ${diferencaDias} dia(s)`);
