// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declare a function "buildABear" that takes 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
// Declare a variable "greeting" and set it to an interpolated string
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// Declare a variable "demographics" and set it to an array
  var demographics = [name, age];
// Declare a variable "powerSaying" and set it to a concatenated string
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// Declare an object called "builtBear"
  var builtBear = {
// Create a key "basicInfo" assigned to the variable "demographics"
    basicInfo: demographics,
// Create a key "clothes" assigned to the parameter  "clothes"
    clothes: clothes,
// Create a key "exterior" assigned to the parameter "fur"
    exterior: fur,
// Create a key "cost" assigned to the value 49.99
    cost: 49.99,
// Create a key "sayings" assigned to an array with 3 elements
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// // Create a key "isCuddly" assigned to the value "true"
    isCuddly: true,
  };
// Return the value of the "builtBear" object
  return builtBear
}

// Call the function "buildABear" and pass 5 arguements into it
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Call the function "buildABear" and pass 5 arguements into it
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//Declare a function "FizzBuzz" that takes 3 parameters
function fizzBuzz(num1, num2, range) {
// create a for loop
// It will loop as long as "i" is less than or equal to
// the value of the "range" parameter
  for (var i = 0; i <= range; i++) {
// For the "if" statement to be true, check if the
// modulo of "i" divided by num1 is strictly equal to 0
// AND if the modulo of "i"  divided by num2 is stricly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
// Log the string 'fizzbuz' to the console if
// the above statement is true
      console.log('fizzbuzz');
// Check if the modulo of "i" divided by "num1" is
// stricly equal to 0
    } else if (i % num1 === 0) {
// Log the string 'fizz' to the console if
// the above condition is true
      console.log('fizz');
// Check if the modulo of "i" divided by "num2" is
// strictly equal to 0
    } else if (i % num2 === 0) {
// Log the string 'buzz' to the console if
// the above condition is true
      console.log('buzz');
// If no above statements are true, this happens
    } else {
// Log the value of "i" to the console
      console.log(i);
    }
  }
}
// Call the "fizzbuzz" function and pass 3 arguments into it
fizzBuzz(3, 5, 100);
// Call the "fizzbuzz" function and pass 3 arguments into it
fizzbuzz(5, 8, 400);
