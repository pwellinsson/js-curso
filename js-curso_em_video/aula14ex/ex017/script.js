numero = document.querySelector("input#num");
botao = document.querySelector("input#botao");

numero.addEventListener("keydown", function (event) {
  if (event.which === 13) {
    event.preventDefault();
    botao.click();
  }
});

function tabuada() {
  tabu = document.querySelector("select#tabu");

  if (numero.value == "") {
    alert("Por favor, digite um número!");
  } else {
    tabu.innerHTML = "";
    for (let n = 1; n <= 10; n++) {
      let new_item = document.createElement("option");
      new_item.text = `${n} x ${numero.value} = ${n * numero.value}`;
      tabu.appendChild(new_item);
    }
  }
}
