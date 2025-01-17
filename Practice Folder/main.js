console.log("Hello World!"); //console.log allows you to display your javascript code on a browser or node.js.
console.log(
  "My name is William, and I will master javascript, hopefully by the end of the month!!!"
); //this is just another example of console.log.
// you can also write all your console.logs directly on the developer tools on the browser.
//.log is a method, that allows your code to be shown.

//let and const allow you to add value to things.
//The types of values that you can add are as followed: String = which is just regular words like "hello my name is William", Number = this is any number that isn't in a string "" like 10 not "10", Boolean = this is a true or false statement, Null = this is giving a value of null which means nothing/empty/placeholder, and last is Undefined = this is similar to null, but for a null value you would write let cat = null, but for a undefined you leave the value blank, like this let cat =.

let age = 30;
age = 31;

const speed = 100;
const name = "John";
const manAge = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(speed);
console.log(age);

console.log(typeof speed);
console.log(typeof name);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);

//for strings, there is a concept call concatenation or template string, which allows you to add values inside a string

console.log(`My name is ${name}, and I'm ${age} years old`); // this can also be added to a const

age = 45;

const description = `My name is ${name}, and I'm ${age} years old`;
console.log(description);

//there methods that allow you to do things with the strings, like get the number of letters in a string.

console.log(description.length); //this gives you the number of words in the sentence.
console.log(description.toUpperCase()); // this makes the words in the string upper case.
console.log(description.toLowerCase()); // this makes the words in the string upper case.
console.log(description.substring(0, 10)); //this gives you start and end points in a string.
console.log(description.substring(10, 30).toUpperCase()); // you can add multiple methods to a string.
console.log(description.split("")); //the use of split makes the string into a array, where each letter and space now is it's own string. What is added inside the () is what is getting separated. If you put ('') in the (), each letter will become an new string.

const w = "Beast, Master, Gamer, Coder";
console.log(w.split(", ")); // in this scenario because I created a string variable with comas, and in the split() I added split(, ), that means that the split will be whenever it sees a ", ". Which is why there are now 4 new strings, since they where separated by ", ".

//Array - variables that hold multiple values.

const fruits = ["apples", "oranges", "pears"]; //an array uses [] and not () or {}.

fruits[3] = "grapes"; //this is how you add a new value to an array. You need to call the variable, give the new index number after the last one, then you give it the value you want to add.

fruits.push("mango"); //this is another and better method to add a new value to the end of an array. This is because with this method, you don't need to know what the last index number is.

fruits.unshift("strawberries"); //this adds a new value to the start of the array.

fruits.pop(); //this removes the last value in the array.

console.log(fruits); // this will display the whole array.
console.log(fruits[1]); //this will display only 'orange', because if you add a [] after the variable, you are looking through the array, to find the value in the given index number. Why not 'apple', its because, the numbers start with "0" not "1". So, 'apple' is "0", and 'pears' is "2".
console.log(fruits[3]); // this is the newly created value in the array using the old method.'
console.log(fruits[4]); // this is the newly created value in the array using the new and better method.
console.log(fruits[0]);

console.log(Array.isArray(fruits)); //this is the method to tell if the variable is an array.
console.log(fruits.indexOf("oranges")); // this allows you to find what is the index of a value in an array.

//Objects are a list or multiple bits of information inside one variable.

const person = {
  firsName: "William",
  lastName: "Sanchez",
  age: 32,
  hobbies: ["Gaming", "Coding", "Movies"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);//this gives you the whole object.
console.log(person.firsName);//this gives you only the first name.
console.log(person.hobbies);//this gives you only the array in the hobbies section.
console.log(person.firsName, person.lastName);//you are able to add more than one parameter. 
console.log(person.hobbies[1]);//you are able to select a specific index value inside an array.
console.log(person.address.city);//you are able to select information from another object inside the parent object. 

const {firsName, lastName, address: {city}} = person;//this allows you to pull out the information for the object, and you could call the pulled information. If you want to pull a value from the an object inside the parent object, it needs to be written as const address: {city} = person.
console.log(firsName);//this will give you "William" from the person object.
console.log(city);

person.email = 'williamsanchez.8055@gmail.com';//this adds a new item to the parent object.
console.log(person);// now you can see that the newly added email is now apart of the object.

const todos = [
    {
        id: 1,
        text: "take out trash",
        isCompleted: true

    },
    {
        id: 2,
        text: "meeting with boss",
        isCompleted: true

    },
    {
        id: 3,
        text: "dentist appt",
        isCompleted: false

    }
];

console.log(todos[1].text);//this allows you to call a object value from the array. This one pulls the text value from the id 2.
console.log(todos[2].isCompleted);
todos.push({
    id: 4,
    text: "gaming session",
    isCompleted: false
});

console.log(todos);//here it is showing the new object I added to the end of the array.

todos.unshift({
        id: 10,
        text: "1 to the 2 to the 3",
        isCompleted: false
});

console.log(todos);//here it id showing the new object I added to the end.
console.log(todos[4].id);

const todosJSON = JSON.stringify(todos);//this converting the object into a string that it read by a server.
console.log(todosJSON);

//I ended the video at 37:37.
