/**Lista de Tarefas */

let contador = 0;
let input = document.querySelector("input#input_tarefa");
let btnAdd = document.querySelector("button#btn-add");
let main = document.querySelector("main#area_lista");

function addTarefa() {
  // PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value;

  //SE NÃO FOR VAZIO, NULO NEM INDEFINIDO
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = `<div id="${contador}" class="item">
        <div onclick="fixarTarefa(${contador})" class="item-icone">
          <em id="icone_${contador}" class="mdi mdi-circle-outline"></em>
        </div>
        <div onclick="fixarTarefa(${contador})" class="item-nome">
          ${valorInput}
        </div>
        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete"><em class="mdi mdi-delete"></em> Deletar</button>
        </div>
      </div>`;
    // ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    // ZERAR OS CAMPINHOS
    input.value = "";
    input.focus();
  }
}

input.addEventListener("keydown", function (event) {
  if (event.which === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function fixarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}
