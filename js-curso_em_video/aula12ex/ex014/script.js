function carregar() {
    msg = document.querySelector('div#msg')
    img = document.querySelector('div#image')
    data = new Date()
    // hora = data.getHours()
    hora = 12
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Good Morning
        img.src = "img/foto_manha.png"
        document.body.style.background = '#d6b087'
    } else if (hora >= 12 && hora <= 18) {
        // Good Afternom
        img.src = "img/foto_tarde.png"
        document.body.style.background = '#ee7002'
    } else {
        // Good Night
        img.src = "img/foto_noite.png"
        document.body.style.background = '#3d80b4'
    }
}
