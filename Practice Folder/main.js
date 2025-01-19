// // // // console.log("Hello World!"); //console.log allows you to display your javascript code on a browser or node.js.
// // // // console.log(
// // // //   "My name is William, and I will master javascript, hopefully by the end of the month!!!"
// // // // ); //this is just another example of console.log.
// // // // // you can also write all your console.logs directly on the developer tools on the browser.
// // // // //.log is a method, that allows your code to be shown.

// // // // //let and const allow you to add value to things.
// // // // //The types of values that you can add are as followed: String = which is just regular words like "hello my name is William", Number = this is any number that isn't in a string "" like 10 not "10", Boolean = this is a true or false statement, Null = this is giving a value of null which means nothing/empty/placeholder, and last is Undefined = this is similar to null, but for a null value you would write let cat = null, but for a undefined you leave the value blank, like this let cat =.

// // // // let age = 30;
// // // // age = 31;

// // // // const speed = 100;
// // // // const name = "John";
// // // // const manAge = 30;
// // // // const rating = 4.5;
// // // // const isCool = true;
// // // // const x = null;
// // // // const y = undefined;
// // // // let z;

// // // // console.log(speed);
// // // // console.log(age);

// // // // console.log(typeof speed);
// // // // console.log(typeof name);
// // // // console.log(typeof rating);
// // // // console.log(typeof isCool);
// // // // console.log(typeof x);
// // // // console.log(typeof y);

// // // // //for strings, there is a concept call concatenation or template string, which allows you to add values inside a string

// // // // console.log(`My name is ${name}, and I'm ${age} years old`); // this can also be added to a const

// // // // age = 45;

// // // // const description = `My name is ${name}, and I'm ${age} years old`;
// // // // console.log(description);

// // // // //there methods that allow you to do things with the strings, like get the number of letters in a string.

// // // // console.log(description.length); //this gives you the number of words in the sentence.
// // // // console.log(description.toUpperCase()); // this makes the words in the string upper case.
// // // // console.log(description.toLowerCase()); // this makes the words in the string upper case.
// // // // console.log(description.substring(0, 10)); //this gives you start and end points in a string.
// // // // console.log(description.substring(10, 30).toUpperCase()); // you can add multiple methods to a string.
// // // // console.log(description.split("")); //the use of split makes the string into a array, where each letter and space now is it's own string. What is added inside the () is what is getting separated. If you put ('') in the (), each letter will become an new string.

// // // // const w = "Beast, Master, Gamer, Coder";
// // // // console.log(w.split(", ")); // in this scenario because I created a string variable with comas, and in the split() I added split(, ), that means that the split will be whenever it sees a ", ". Which is why there are now 4 new strings, since they where separated by ", ".

// // // // //Array - variables that hold multiple values.

// // // // const fruits = ["apples", "oranges", "pears"]; //an array uses [] and not () or {}.

// // // // fruits[3] = "grapes"; //this is how you add a new value to an array. You need to call the variable, give the new index number after the last one, then you give it the value you want to add.

// // // // fruits.push("mango"); //this is another and better method to add a new value to the end of an array. This is because with this method, you don't need to know what the last index number is.

// // // // fruits.unshift("strawberries"); //this adds a new value to the start of the array.

// // // // fruits.pop(); //this removes the last value in the array.

// // // // console.log(fruits); // this will display the whole array.
// // // // console.log(fruits[1]); //this will display only 'orange', because if you add a [] after the variable, you are looking through the array, to find the value in the given index number. Why not 'apple', its because, the numbers start with "0" not "1". So, 'apple' is "0", and 'pears' is "2".
// // // // console.log(fruits[3]); // this is the newly created value in the array using the old method.'
// // // // console.log(fruits[4]); // this is the newly created value in the array using the new and better method.
// // // // console.log(fruits[0]);

// // // // console.log(Array.isArray(fruits)); //this is the method to tell if the variable is an array.
// // // // console.log(fruits.indexOf("oranges")); // this allows you to find what is the index of a value in an array.

// // // // //Objects are a list or multiple bits of information inside one variable.

// // // // const person = {
// // // //   firsName: "William",
// // // //   lastName: "Sanchez",
// // // //   age: 32,
// // // //   hobbies: ["Gaming", "Coding", "Movies"],
// // // //   address: {
// // // //     street: "50 main st",
// // // //     city: "Boston",
// // // //     state: "MA",
// // // //   },
// // // // };

// // // // console.log(person); //this gives you the whole object.
// // // // console.log(person.firsName); //this gives you only the first name.
// // // // console.log(person.hobbies); //this gives you only the array in the hobbies section.
// // // // console.log(person.firsName, person.lastName); //you are able to add more than one parameter.
// // // // console.log(person.hobbies[1]); //you are able to select a specific index value inside an array.
// // // // console.log(person.address.city); //you are able to select information from another object inside the parent object.

// // // // const {
// // // //   firsName,
// // // //   lastName,
// // // //   address: { city },
// // // // } = person; //this allows you to pull out the information for the object, and you could call the pulled information. If you want to pull a value from the an object inside the parent object, it needs to be written as const address: {city} = person.
// // // // console.log(firsName); //this will give you "William" from the person object.
// // // // console.log(city);

// // // // person.email = "williamsanchez.8055@gmail.com"; //this adds a new item to the parent object.
// // // // console.log(person); // now you can see that the newly added email is now apart of the object.

// // // // const todos = [
// // // //   {
// // // //     id: 1,
// // // //     text: "take out trash",
// // // //     isCompleted: true,
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     text: "meeting with boss",
// // // //     isCompleted: true,
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     text: "dentist appt",
// // // //     isCompleted: false,
// // // //   },
// // // // ];

// // // // console.log(todos[1].text); //this allows you to call a object value from the array. This one pulls the text value from the id 2.
// // // // console.log(todos[2].isCompleted);
// // // // todos.push({
// // // //   id: 4,
// // // //   text: "gaming session",
// // // //   isCompleted: false,
// // // // });

// // // // console.log(todos); //here it is showing the new object I added to the end of the array.

// // // // todos.unshift({
// // // //   id: 10,
// // // //   text: "1 to the 2 to the 3",
// // // //   isCompleted: false,
// // // // });

// // // // console.log(todos); //here it id showing the new object I added to the end.
// // // // console.log(todos[4].id);

// // // // const todosJSON = JSON.stringify(todos); //this converting the object into a string that it read by a server.
// // // // console.log(todosJSON);

// // // // //for loops

// // // // for (let i = 0; i < 10; i++) {
// // // //   console.log(`For Loop Number: ${i}`);
// // // // } //this is a for loop, what this is doing is that it will follow the logic that was entered into the parenthesis, and if it meets the criteria it will keep running the logic until it stops. in this case, we are creating a i variable with a value of 0. The logic to make it end is once the i value is greater than 10 it will stop. The i++ is really i + 1, so every time the logic is ran, it will increase the value of i by one.

// // // // let i = 0;
// // // // while (i < 10) {
// // // //   console.log(`While Loop Number: ${i}`);
// // // //   i++;
// // // // } // I while loop is the same as the for loop, with the only difference being that the variable is outside the logic.

// // // // for (let i = 0; i < todos.length; i++) {
// // // //   console.log(todos[i].text);
// // // // } //this is the same thing as the normal for loop, but instead of giving a flat number to end the logic, we use a array's length as the end point.

// // // // for (let todo of todos) {
// // // //   console.log(todo.text);
// // // // } //this is a better way display the information in an array.

// // // // for (let todo of todos) {
// // // //   console.log(todo.id);
// // // // } //this is the same thing as above, I just used the ids instead of the text.

// // // // //this are different kinds of ways to get information from arrays. forEach which just goes down the line of the array. map which creates a new array from an existing array. filter which will allow you to create a new array from an array, but it will filter things out that you want.

// // // // todos.forEach(function (todo) {
// // // //   console.log(todo.text);
// // // // }); //this is very similar to a normal for loop, but this allows you to skip creating the i = 0 logic, and still goes through all the values in an array, while creating a new variable called todo.

// // // // const todoText = todos.map(function (todo) {
// // // //   return todo.text;
// // // // });
// // // // console.log(todoText);//this map function that created a new array called todoText that only has the text from the old array.

// // // // const todoId = todos.map(function (todo) {
// // // //   return todo.id;
// // // // });
// // // // console.log(todoId);//here I created a new variable called todoId, which only shows the ids of the old array.

// // // // const todoIsComplete = todos.map(function (todo) {
// // // //   return todo.isCompleted;
// // // // });

// // // // console.log(todoIsComplete);

// // // // const todosIsCompleteTrue = todos.filter(function (todo) {
// // // //   return todo.isCompleted === true;//with the filter function I created a new variable called todosIsCompleteTrue, which created a new array the only shows the true statements.
// // // // }) .map(function(todo) {
// // // //   return todo.text;//this is just a continuation of the .filter logic above, but this map made the newly created variable not only filter the true statements, but showed the text of those true statements.
// // // // });

// // // // console.log(todosIsCompleteTrue);

// // // //I stopped the video at 46:02

// // // const x = 4;
// // // const y = 11;

// // // if (x > 5 && y > 10) {
// // //   console.log('x is more than 5 or y is more than 10');
// // // } //the && in a if statement means and, but for the console.log to work, both logics need to be true. If only one logic is true, the console.log doesn't work.

// // // if (x > 5 || y > 10) {
// // //   // console.log('x is more than 5 or y is more than 10');
// // // } // the || in a if statement means or, and it only need one of the 2 logics to be true to work.

// // // const z = 0;

// // // const color = z > 10 ? 'red' : "blue";//this is very similar to the normal if statement, but this is more used if you want to create a variable the is based on a condition. The ? = then, and the : = else.
// // // const m = 9;

// // // const sky = m === z ? 'z is equal to 11' : "z doesn't equal 11";

// // // // console.log(color);
// // // // console.log(sky);

// // // const color = "green";

// // // switch(color){
// // //   case 'red':
// // //     console.log("color is red");
// // //     break;
// // //     case 'blue':
// // //       console.log("color is blue");
// // //       break;
// // //       default:
// // //         console.log("color is NOT red or blue");
// // //         break;
// // // };//a switch is the same thing as if statements, with a few difference: if is replaced by switch, else if replaced by case, you needs to add the break, and else is replaced by default.
// // // let w = 2;
// // // let j = 7;

// // // const wj = w + j;

// // // console.log(wj);

// // // let love = wj;

// // // if (love > 20) {
// // //   love = "they are in Love!!";
// // //   console.log(love);
// // // } else if (love < 21){
// // //   love = "Maybe they will be in love in the future";
// // //   console.log(love);
// // // } else if (love < 10) {
// // //   love = "they can't make it work";
// // //   console.log(love);
// // // }

// // // switch(love){
// // //   case "they are in Love!!":
// // //     console.log('they will be in Love forever!!!');
// // //     break;
// // //     case "Maybe they will be in love in the future":
// // //     console.log("hopefully they will fall in Love in the near future!");
// // //     break;
// // //     default:
// // //       console.log("I guess it can't happen");
// // //       break;
// // // }

// // function addNums (num1 = 1, num2 = 1) {
// //   return num1 + num2;
// // }

// // console.log(addNums(5, 7));//this is a function. Functions have a few key points: 1. When creating one you are always creating a variable, 2. the structure of a function is "function variable (){}"", 3. you can add upto 3 parameters in a function, 4. you must always add a return syntax if you want to get the logic to work, and you can do console.log outside the function, 5. to add values to the parameters, you can either add them inside the parameters like num1 = 1, but the correct way to add values is when you are calling the function like console.log(addNums(5, 7)), this will replace the num1 with 5 and num2 with 7, 6. even if you don't to add parameters, you still need to add "()" when calling a function because "()" = function.

// // const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;

// // // console.log(addNums2(5, 7));//this is a newer way to create a function, it makes things look a lot cleaner, but there are a few differences from the old way: 1. you don't need to write out function, you just create the variable directly, 2. the structure is "const variable = () => {};", 3. if you only have one parameter, you don't even need to add the (), but if you have more than one, it needs to be added, 4. if you only have one argument/logic you don't need to add the {} or the return, but if you do have more than one, you need to add the {} and the return.

// // // const addNums3 = num1 => num1 + 7;

// // // console.log(addNums3(5));//here is an example with only one parameter and one argument/logic.

// // // function games(game, type) {
// // //   return (`I like ${game}, and its a ${type}, I can play this all day!!!`);
// // // }

// // // console.log(games("Overwatch 2", "first person shooter"));

// // // const games1 = (game, type) => `I like ${game}, and its a ${type}, I can play this all day!!!`;

// // // console.log(games1("Marvel Rivals", "third person shooter"));

// // // const games2 = game => `I like ${game}, and its a RPG, I can play this all day!!!`;

// // // console.log(games2("Final Fantasy 11"));

// // function name(params) {return arguments};
// // const name1 = (params) => {return arguments};

// //OOP = Object Orienting Programming

// //Constructor Function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   };//this is a constructor function, its a little different than a normal function since it is used to create data for objects, so the structure of Person can be reused. A few key things to remember about OOP constructor functions: 1. the variable needs to be capital, it's not a requirement for the function to run, but others reading the code, since that variable will be used as a structure for other objects created in the future. 2. you need to use the "this" syntax with the parameter, and make it equal to the parameter that was used. You will need to create a this statement for ever parameter that you added to the function level. This will allow you to add in information to the future objects. 3. you can add different effect like new Date to this statements, which will change the date from a string to an actual date, see below.

//   //you can add other functions inside functions.

//   Person.prototype.getBirthYear = function (){
//     return this.dob.getFullYear();//the prototype syntax is used if you wanted to remove the content from the function, and only call it when you need to. For example, if you add the getBirthYear inside the Person function, every time you call the Person func you will also call the getBirthYear func. Lets say you only want to call it when you need it, that's what prototype does. When you console.log(person1), you will get everything inside the Person func, except for getBirthYear and getFullName, since they aren't in the Person func. To call the getBirthYear or the getFullName func, you need to console.log(person1.getBirthYear()) to get run the func and get the info.
//   }
//   Person.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`;
//   }

// //Instantiate Object
// const person1 = new Person('John', 'Doe', '4-3-1980');//this way to create an object with OOP, you need to create a new variable using the "new" syntax and calling the function with the object structure, in this example it is Person. Now if you write in the parameters, the info will appear as an object once you console.log it.
// const person2 = new Person('William', 'Sanchez', '10-7-1991');//because this function was created "this" syntax, you can reuse it to create new objects using the same structure, but remember to use the "new" syntax before calling the function.

// console.log(person1.getBirthYear());//since it's an object, you can call the individual components from the object.
// console.log(person2.getFullName());//same as above.

// console.log(person1)

//Class is the same as OOP func as above, but it's cleaner. For example: above to create the OOP func you needed to start by function Person (){}, but in OOP class you start with class Person{constructor()}. Also, to use the prototype syntax, you need to write it outside the Person func as Person.prototype.getBirthYear (){}, but in the OOP class, you can write it directly inside the Person func, and by writing getBirthYear(){}. Class looks much cleaner

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear(){
    return this.dob.getFullYear();
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person1.getBirthYear()); 
console.log(person2.getFullName()); 

console.log(person1);
