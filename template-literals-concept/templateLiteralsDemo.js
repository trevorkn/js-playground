// Declare blog title
const title = 'Best reads of 2019';

// Declare author name
const author = 'Mario';

// Declare number of likes
const likes = 30;

// Create a string with dynamic content using template literals
let result = `The blog called ${title} by ${author} has ${likes} likes.`;

// Log the result string to the console
console.log(result);

// Create an HTML snippet with dynamic content using template literals
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`;

// Log the HTML snippet to the console
console.log(html);
