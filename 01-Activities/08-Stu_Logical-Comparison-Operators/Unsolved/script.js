const a = '50';
const b = 50;
const c = 100;
const d = c % b;// 0
const e = c / 2;// 50

const expression1 = (b === e);//50 === (100/2 = 50) = true
const expression2 = (e < d);//(100/2 = 50) < 100/50 has a remainder of 0 = false

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);// true because it isn't considering the type of element.
console.log(b == e);// true
console.log(c > b);// true
console.log(d >= 0);// true

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2);// true
console.log(!expression1 || !expression2);// true
  
