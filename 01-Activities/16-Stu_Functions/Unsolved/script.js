// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs 'They are equal in type and value'
isEqual(10, 10);

// Refer to sample functions as needed!
isEqual("10", 10);
// TODO: Call the isEqual function so that it logs 'They are equal in value'
const isEqualTakeTwo = isEqual;
// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`
isEqualTakeTwo(5, 13);
// TODO: Call the isEqualTakeTwo function so that it logs 'They are not equal'
