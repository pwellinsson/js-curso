function Contar() {
  let inic = document.querySelector("input#inic").value;
  let fim = document.querySelector("input#fim").value;
  let passo = document.querySelector("input#passo").value;
  let res = document.querySelector("div#res");

  if (Number(passo) <= 0) {
    alert("Passo inválido! Considerando PASSO = 1");
    passo = 1;
  }

  if (inic == "" || fim == "" || passo == "") {
    res.innerHTML = "Impossível contar!";
  } else if (Number(inic) < Number(fim)) {
    res.innerHTML = "Contando: ";
    for (let c = Number(inic); c <= Number(fim); c += Number(passo)) {
      res.innerHTML += `${c} \u{1F449}`;
      // console.log(`${inic} / ${fim} / ${passo}`);
    }
    res.innerHTML += `\u{1F3C1}`;
  } else {
    res.innerHTML = "Contando: ";
    for (let c = Number(inic); c >= Number(fim); c -= Number(passo)) {
      res.innerHTML += `${c} \u{1F449}`;
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}

// mão: \u{1F449}, Bandeira:  \u{1F3C1}
