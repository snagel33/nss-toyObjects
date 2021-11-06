//The toys have a string name property, a string manufacturer property, an integer size property, and a float price property

const toys = [
    {
        id: 1,
        name: "Han Solo",
        manufacturer: "Hasbro",
        size: 6,
        price: 8.99
    },
    {
        id: 2,
        name: "Spiderman",
        manufacturer: "Mattel",
        size: 7,
        price: 12.00
    },
    {
        id: 3,
        name: "Hulk",
        manufacturer: "Mattel",
        size: 10,
        price: 20.49
    }
]

const thor = {
    id: 4,
    name: "Thor",
    manufacturer: "Mattel",
    size: 8,
    price: 13.99
}

const ironman = {
    id: 5,
    name: "Iron Man",
    manufacturer: "Marvel",
    size: 8,
    price: 19.99
}

//using push() to add last 2 objects to the end of the array

toys.push(thor)
toys.push(ironman)

for (const toy of toys) {
    console.log(toy.name)
}

for (const toy of toys) {
    console.log(`The price is $${toy.price}`)
}

console.log(toys)


//code to add "thanos" to array with an id property
const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}
const thanos = {
    name: "Thanos",
    manufacturer: "Marvel",
    size: 14,
    price: 29.99
}

addToyToInventory(thanos)

console.log(toys)


//using string interpolation to access properties and the "for...of" loop to display
//increased the price of all toys by 5% in code below

for (const toy of toys) {
    toy.price = toy.price * 1.05
    console.log(`The ${toy.size}-inch ${toy.name} toy costs $${toy.price}.`)
}

//pulling a toy through the id

const toyToFind = 3

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price * 1.05
        console.log(`The ${toy.size}-inch ${toy.name} toy costs $${toy.price}.`)
    }
}


