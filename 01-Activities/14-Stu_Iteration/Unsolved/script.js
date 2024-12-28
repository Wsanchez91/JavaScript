// WRITE YOUR CODE BELOW

const students = ['William' , 'Joshua', 'Chad', 'Joe', 'Bill', 'Emily'];
console.log(students.length);

for (let i = 0; i < students.length; i++){
    console.log(`Great to see you, ${students[i]}`);
}

for (let student of students) {
    student += " Sanchez";
    console.log(`Great to see you, ${student}`);
}