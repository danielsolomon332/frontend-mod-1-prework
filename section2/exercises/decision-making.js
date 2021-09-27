/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

// Answer:
// In lines 14 through 18, we are setting up a conditional statement that has two results. The first is executed if
// we got through door 1, the second is executed if we go through a different door.

2. What variable has a new value assigned to it after the first if statement executes?

// Answer:
// The variable "bearClothing" has a new value assigned after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

// Answer:
// If you changed the variable doorChoice to equal 3, the bearClothing vaule would be "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

// Answer:
// In lines 27 through 35, we are setting up a conditional statement.
// The variable bearChoice has three potential values with different statement responses.
// If the first statement is true, then the first value is returned. Then the other statements will not be checked.
// If the first statement is false, then the second statement is checked.
// If the second statement is true, then the second value is returned.
// If the second statement is false, then the third statement is checked.
// If the third statement is true, then the third value is returned.
// If the third statement is false, the final value is returned.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

// Answer:
// If the variable bearChoice is set equal to 3, the final outcome will be:
// "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

// Answer:
// If the variable doorChoice is set equal 1, and the variable bearChoice is set equal 2, the final poutcome will be:
// "You tell the bear the hat is too small and it starts to cry!""

7. What is your favorite ending?

// Answer:
// My favorite answer is when bearChoice is not equal to 1, 2, 3, and the resulitng statment is:
// "You stay with the bear and become it's best friend!"

*/
