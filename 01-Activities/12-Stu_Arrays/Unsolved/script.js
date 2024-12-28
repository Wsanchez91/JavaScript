// WRITE YOUR CODE HERE

const names = ['Andre', 'Karl', 'Rashida', 'Olivia'];

console.log(names.length);

console.log(names);

console.log(`Welcome to the class, ${names[0]}`);
console.log(`Welcome to the class, ${names[1]}`);
console.log(`Welcome to the class, ${names[2]}`);
console.log(`Welcome to the class, ${names[3]}`);

names[1] = "William"
names[2] = "Janelis"

console.log(`Welcome to the class, ${names}`)
console.log(`Welcome to the class, ${names[1]}`)
console.log(`Welcome to the class, ${names[2]}`)

console.log(names)

if (names[1] == 'Karl'){
    console.log('Karl is in class')
} else {
    console.log('William is in class')
}