/* EVENTOS
Eventos são ações desparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válido para input, s........
onchange -> Disparado quando existe uma mudança no contéudo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.
*/

function eventoClick() {
  alert("Acionou um evento de Click");
  document.body.style.backgroundColor = "yellowgreen";
}

function MudaCor() {
  let div_cor = document.querySelector("div#cor");
  div_cor.style.backgroundColor = "red";
}

function VoltaCor() {
  let div_cor = document.querySelector("div#cor");
  div_cor.style.backgroundColor = "rgb(37, 37, 163)";
}

function AdicionaTexto() {
  let p = document.querySelector("p#texto");
  p.append("O mouse moveu =/ ");
}

function LimpaTexto() {
  document.querySelector("input#CampoTexto").value = "";
}

function Mudou() {
  console.log("Mudou");
}
