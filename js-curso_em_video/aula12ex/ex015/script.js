function verificar() {
  data = new Date();
  ano = data.getFullYear();
  nasc = document.querySelector("input#nasc");
  res = document.querySelector("div#res");
  if (Number(nasc.value) > ano || nasc.value.length == 0) {
    console.log("Verifique os dados e tente novamente");
  } else {
    console.log("Tudo certo até agora");
    let fsex = document.getElementsByName("sex");
    let idade = ano - Number(nasc.value);
    //res.innerHTML = `Idade calculada: ${idade}`;
    let genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "img/bebe_m.png");
      } else if (idade < 21) {
        img.setAttribute("src", "img/jovem_m.png");
      } else if (idade < 50) {
        img.setAttribute("src", "img/adulto_m.png");
      } else if (idade < 160) {
        img.setAttribute("src", "img/idoso_m.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "img/bebe_f.png");
      } else if (idade < 21) {
        img.setAttribute("src", "img/jovem_f.png");
      } else if (idade < 50) {
        img.setAttribute("src", "img/adulto_f.png");
      } else if (idade < 160) {
        img.setAttribute("src", "img/idoso_f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

    var imgDiv = document.createElement("div");
    imgDiv.style.marginTop = "10px";

    imgDiv.appendChild(img);

    res.appendChild(imgDiv);
  }
}
