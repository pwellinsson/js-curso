/* if else */
/*
var hora = new Date().getHours();

if (hora < 12) {
  alert("Bom dia");
} else if (hora < 18) {
  alert("Boa Tarde");
} else {
  alert("Boa Noite");
}
*/

function verificar() {
  let nome = document.querySelector("input#nome").value;

  if (nome == "" || nome == null) {
    let p = document.querySelector("p#texto");
    p.innerHTML = "O campo não pode ser vazio";
    p.style.color = "red";
  } else {
    let p = document.querySelector("p#texto");
    p.innerHTML = "Parabéns <br> Tudo Certo";
    p.style.color = "blue";
  }
}