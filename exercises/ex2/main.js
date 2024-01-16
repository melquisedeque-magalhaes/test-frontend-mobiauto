function upadtedData(currentObject, newDataObject){
    for (const [key, value] of Object.entries(newDataObject)) {
        if(key === 'name'){
            currentObject['name'] = value
        }

        if(key === 'country'){
            currentObject['country'] = value
        }

        if(key === 'age'){
            currentObject['age'] = value
        }
    }

    return currentObject
}

const currentObject = { name: "Marcos", country: "Brasil", age: 22 }

const newDataObject = { country: "Japão", age: 33 }

const elementCurrentObject = window.document.getElementById('currentObject')
const elementNewDataObject = window.document.getElementById('newDataObject')

elementCurrentObject.innerHTML = JSON.stringify(currentObject, null, 2)
elementNewDataObject.innerHTML = JSON.stringify(newDataObject, null, 2)

const object = upadtedData(currentObject, newDataObject)

console.log("object", object)

const element = window.document.getElementById('value')

element.innerHTML = JSON.stringify(object, null, 2)