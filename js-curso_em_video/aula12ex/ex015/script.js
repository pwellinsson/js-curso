function verificar() {
    data = new Date()
    ano = data.getFullYear()
    nasc = document.querySelector('div#nasc')
    res = document.getElementById('res')
    if (Number(nasc.value.length) > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        alert('Tudo certo até agora')
    }
    /*age = ano - nasc
    alert(`ano: ${ano}, idade ${age} e nascimento ${nasc.value}`)
    res.innerHTML = 'oie'*/
}