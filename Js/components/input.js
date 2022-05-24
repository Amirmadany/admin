//------------------------------ EXPLODE THE CHAR IN THE INPUT ------------------------------
const explodeInputs = document.querySelectorAll('.form-control[data-seprator]')

explodeInputs.forEach(item => {
    const explodeCount =  item.getAttribute('data-seprator')
    let explodeShape=  item.getAttribute('data-seprator-with')

    if(!explodeShape)
        explodeShape = '-'

    item.addEventListener('input', () => {
        applyExplodeChar(item, explodeCount, explodeShape)
    })
})

function applyExplodeChar(input, explodeCount, explodeShape){
    let data = String(input.value).replace(explodeShape, '')
    let value = data;

    const result = []

    while(value.length > 0){
        value = value.replace(explodeShape, '')
        result.push(value.slice(0, explodeCount))
        value = value.slice(explodeCount)
        data = data.replace(explodeShape, '')
    }

    input.value = result.join(explodeShape)
    input.setAttribute('value', data)
}

//------------------------------ EXPLODE THE CHAR IN THE INPUT ------------------------------

//------------------------------ DATE StRUCTURE IN THE INPUT ------------------------------
const dateInputs = document.querySelectorAll('.form-control[data-date]')

dateInputs.forEach(item => {
    item.addEventListener('input', () => {
        convertToDateFormat(item)
    })
})

function convertToDateFormat(input){
    let value = String(input.value).replace('/', '')
    
    let result = []

    if(value.length > 0)
        result.push(value.slice(0, 2))

    if(value.length > 2)
        result.push(value.slice(2, 4))

    if(value.length > 4){
        value = value.replace('/', '')
        result.push(value.slice(4, 8)) 
    }

    input.value = result.join('/')
}

//------------------------------ DATE StRUCTURE IN THE INPUT ------------------------------

//------------------------------ MAX CHAR IN THE INPUT ------------------------------

const maxCharInputs = document.querySelectorAll('.form-control[data-max-char]')

maxCharInputs.forEach(item => {
    const maxChar = Number(item.getAttribute('data-max-char'))

    item.addEventListener('input', () => {
        if(item.value.length > maxChar)
            item.value = item.value.slice(0, maxChar)
    })

})

//------------------------------ MAX CHAR IN THE INPUT ------------------------------

const priceInputs = document.querySelectorAll('.form-control[data-price]')

priceInputs.forEach(item => {

    item.addEventListener('input', () => {
       changeFormatNumberToPrice(item)
    })

})

function changeFormatNumberToPrice(input){
    let data = input.value.split(',').join('')

    const value = Number(data).toLocaleString()

    input.value = value
    input.setAttribute('value', data)
}


//------------------------------ INPUT GROUP - HAS RESET BTN ------------------------------
const hasRestBtnInputGroup = document.querySelectorAll('.input-group.has-reset-btn')

hasRestBtnInputGroup.forEach(item => {
    const button = item.querySelector('button')
    const input = item.querySelector('input')

    input.addEventListener('input', () => {
        console.log(input.value)
        if(input.value.length > 0)
            button.classList.add('be-bold')
        else
            button.classList.remove('be-bold')
    })  

    button.addEventListener('click', () => {
        button.classList.remove('be-bold')
    })
    
})
//------------------------------ INPUT GROUP - HAS RESET BTN ------------------------------


//------------------------------ INPUT GROUP - EYE-PASSWORD ------------------------------
const eyePasswordInputGroup = document.querySelectorAll('.input-group.eye-password')

eyePasswordInputGroup.forEach(item => {
    const input = item.querySelector('input')
    const button = item.querySelector('button')

    button.addEventListener('click', () => {
        if(input.type == 'password'){
            input.type = 'text'
            button.classList.add('password')
        }
        else{
            input.type = 'password'
            button.classList.remove('password')
        }
    })
})
//------------------------------ INPUT GROUP - EYE-PASSWORD ------------------------------