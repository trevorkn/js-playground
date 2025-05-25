// Declare the original array
let ninjas = ['shaun', 'ryu', 'chun-li', 12, 30];
console.log(ninjas);  // ['shaun', 'ryu', 'chun-li', 12, 30]

// ===== You commented out the following useful examples: =====
// let result = ninjas.join(',');
// console.log(result);  // Turns array into a comma-separated string

// let result = ninjas.indexOf('chun-li');
// console.log(result);  // Finds the index of 'chun-li' (should be 2)

// Concatenate the original array with a new one
let result = ninjas.concat(['ken', 'crystal']);
console.log(result);  // ['shaun', 'ryu', 'chun-li', 12, 30, 'ken', 'crystal']

// Lengths of arrays
console.log(ninjas.length);  // 5 (original remains unchanged)
console.log(result.length);  // 7 (after adding 'ken' and 'crystal')

// Pop the last element from `result` and store it in `total`
total = result.pop();
console.log(total);  // 'crystal'

// Print the modified `result` after pop()
console.log(result);  // ['shaun', 'ryu', 'chun-li', 12, 30, 'ken']

// Store and print the new length of result
let titall = result.length;
console.log(titall);  // 6

// Pop the last item from original `ninjas` array
ninjas.pop();
console.log(ninjas);  // ['shaun', 'ryu', 'chun-li', 12]
