res = document.querySelector('div#res')
function calcular() {
    txtv = document.querySelector('input#txtvel')
    vel = Number(txtv.value)
    res.innerHTML = `<p>A velocidade do seu carro é <strong>${vel}Km/h</strong>.</p>`

    if(vel > 60) { // Condição simples!
        res.innerHTML += '<p>Você ultrapassou a velocidade permitida. <strong>MULTADO</strong>!</p>'
    }

    res.innerHTML += '<p>Dirija sempre usando cinto de segurança!</p>'
}

function apagar() {
    res.innerHTML = ''
}