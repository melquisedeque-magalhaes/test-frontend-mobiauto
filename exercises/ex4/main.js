/**
 * 
 * @param {string} value
 * @returns {boolean}  
 */
function checkIfTheFirstLetterIsUppercase(value){
    const valueWithoutSpace = value.trim()

    const hasFirstLetterUppercase = /[A-Z]/.test(valueWithoutSpace[0])

    return hasFirstLetterUppercase
}

const value = window.prompt('Digite o valor que você quer verificar se a primeira letra e maiuscula: ')

const returnValue = checkIfTheFirstLetterIsUppercase(value)

console.log("returnValue", returnValue)

const element = window.document.getElementById('value')

element.innerHTML = returnValue

