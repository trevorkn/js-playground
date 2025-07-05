// Object to store student names and their grades
const studentGrades = {
  Trevor: 'A',
  Luigi: 'B',
  Shaun: 'C',
  Yoshi: 'D'
};

// Prompt user for a student name
let inputName = prompt('Enter the student name:');

// Check if the name exists in the studentGrades object
if (studentGrades.hasOwnProperty(inputName)) {
  console.log(`${inputName} got grade ${studentGrades[inputName]}`);
} else {
  console.log('Student not found.');
}
