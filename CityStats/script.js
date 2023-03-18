
const button = document.querySelector('button')
button.addEventListener('click',displayStats)

let resultdiv = document.createElement('div')
resultdiv.id= 'result'
document.querySelector('.innerbg').appendChild(resultdiv)


function displayStats(){
    const input = document.getElementById('input')
    const city = input.options[input.selectedIndex].value

    let population ='',  literacyRate ='',  language =''

    switch(city){

        case 'Bengaluru':
        population = '6cr'
        literacyRate = '89%'
        language = 'Kanada'
        break

        case 'Chennai':
        population = '8cr'
        literacyRate = '90%'
        language = 'Tamil'
        break    

        case 'Delhi':
        population = '3cr'
        literacyRate = '85%'
        language = 'Hindi' 
        break 
        
        case 'Mumbai':
        population = '10cr'
        literacyRate = '88%'
        language = 'Marathi'
        break
    
    }

    let text= `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}`
    document.getElementById('result').innerHTML= text


} 