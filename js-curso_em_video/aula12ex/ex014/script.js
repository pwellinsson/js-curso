function carregar() {
    msg = document.querySelector('div#msg')
    img = document.querySelector('img#image')
    data = new Date()
    // hora = data.getHours()
    hora = 21
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Good Morning
        img.src = "img/foto_manha.png"
    } else if (hora >= 12 && hora < 18) {
        // Good Afternom
        img.src = "img/foto_tarde.png"
    } else {
        // Good Night
        img.src = "img/foto_noite.png"
    }
}
