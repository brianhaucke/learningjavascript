let fruits = ['apple', 'orange', 'pear']
console.log(fruits)

console.log(fruits[0])

console.log(fruits[2])

console.log(fruits.length)

fruits.push('grape')
console.log(fruits)
console.log(fruits.length)

fruits.pop()
console.log(fruits)
console.log(fruits.length)

fruits.splice(1, 0, 'banana')
console.log(fruits)
console.log(fruits.length)

let cats = [
    {
        'name': 'Fluffy',
        'age': 2
    },
    {
        'name': 'Whiskers',
        'age': 10
    },
    {
        'name': 'Munchkin',
        'age': 5
    }
]
console.log(cats)
console.log(cats[0])
console.log(cats[1].name)