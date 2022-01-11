

function red() {
    let r = document.getElementById('redlight')
    let color= r.style.backgroundColor = 'red'
    r = color
}
setTimeout(red, 1000)


function yellow() {
    let r = document.getElementById('yellowlight')
    let color= r.style.backgroundColor = 'yellow'
    r = color
}
setTimeout(yellow, 2000)


function green() {
    let r = document.getElementById('greenlight')
    let color= r.style.backgroundColor = 'green'
    r = color
}
setTimeout(green, 3000)


function partida() {
    let h1 = document.getElementById('text')
    h1.innerHTML= 'GO!'
    
}
setTimeout(partida, 4000)


