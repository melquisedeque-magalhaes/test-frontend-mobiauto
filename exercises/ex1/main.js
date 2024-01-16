/**
 * 
 * @param {string} value
 * @returns {string}  
 */
function maskify(value){
    const valueWithoutSpace = value.trim()

    if(valueWithoutSpace.length <= 4){
        return value
    }

    if(valueWithoutSpace === ''){
        return value
    }

    const newValue = valueWithoutSpace.split('')

    for(i = 0; i < valueWithoutSpace.length - 4; i++){
        newValue[i] = '#'
    }

    return newValue.join('')
}

const value = window.prompt('Digite o valor que você quer mascarar: ')

const valueWithMask = maskify(value)

console.log("valueWithMask", valueWithMask)

const element = window.document.getElementById('value')

element.innerHTML = valueWithMask

