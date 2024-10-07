function nascimento() {
    pais = document.querySelector('input#nasc').value
    res = document.querySelector('div#resp')
    res.innerHTML = `<p>Vivendo em ${pais}</p>`
    if(pais == 'Brasil') {
        res.innerHTML += '<p>Você é Brasileiro!</p>'
    } else {
        res.innerHTML += '<p>Você é Estrangeiro</p>'
    }
}

function remover() {
    res = document.querySelector('div#resp')
    res.innerText = ''
}