const btn = document.getElementById('btn')
const colortxt = document.getElementById('color')
const bg = document.getElementById('wrap')
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click', changeBg)

function changeBg(){

    let hexValue='#'
    for(i=1; i<=6; i++){
        hexValue+= randomHexValue()
    }
    bg.style.background = hexValue
    colortxt.innerHTML= hexValue

}


function randomHexValue(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]

}



