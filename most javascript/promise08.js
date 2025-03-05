//Write a function that uses console.assert to check whether a variable is equal to a certain value, and throws an error if the assertion fails.

function assertEqual(actual, expected, message) {
    console.assert(actual === expected, message || 
                   `Expected ${expected}, but got ${actual}`);
  }

