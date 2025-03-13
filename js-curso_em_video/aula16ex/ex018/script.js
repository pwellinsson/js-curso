let num = document.querySelector("input#num");
let botao = document.querySelector("input#botao");
let res = document.querySelector("div#res");
let numAdicionado = [];

num.addEventListener("keydown", function (event) {
  if (event.which === 13) {
    event.preventDefault();
    botao.click();
  }
});

function adicionar() {
  let list = document.querySelector("select#list");

  res.innerHTML = "";

  if (
    num.value == "" ||
    num.value < 1 ||
    num.value > 100 ||
    numAdicionado.includes(num.value)
  ) {
    alert("Valor inválido ou já encontrado na lista!");
  } else {
    numAdicionado.push(num.value);
    // console.log(`Valor ${num.value} adicionado. \nLista: ${numAdicionado}`);
    let new_item = document.createElement("option");
    new_item.text = `Valor ${num.value} adicionado.`;
    list.appendChild(new_item);
  }
  num.value = "";
}

function finalizar() {
  if (numAdicionado.length == 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    let qtdd_num = numAdicionado.length;
    let maior = Math.max(...numAdicionado);
    let menor = Math.min(...numAdicionado);
    let soma = 0;

    for (let i = 0; i < numAdicionado.length; i++) {
      soma += Number(numAdicionado[i]);
    }
    
    res.innerHTML = `<p>Ao todo temos ${qtdd_num} números cadastrados. </p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${
      soma / qtdd_num
    }. </p>`;
  }
}
