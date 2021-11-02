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

//3 differ examples of console.log

for (const toy of toys) {
    console.log(toy.name)
}

for (const toy of toys) {
    console.log(`The price is $${toy.price}`)
}

console.log(toys)

//The toys have a string name property, a string manufacturer property, an integer size property, and a float price property
