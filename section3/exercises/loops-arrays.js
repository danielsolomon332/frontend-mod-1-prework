/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

// EXAMPLE: Write code below that iterates through a list of animals and print
// each animal.
var animals = ["Zebra", "Giraffe", "Elephant"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// YOU DO: Write code below that iterates through a list of animals and prints "The
// <animal> is awesome!" for each animal.

var animals2 = ["cat", "dog", "bunny"];

for (var n = 0; n < animals2.length; n++) {
  console.log("The" +  " " + animals2[n] + " " + "is awesome!");
}


// YOU DO: Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.

var foods = ["peanut butter", "jelly", "fluff"]

for (var x = 0; x < foods.length; x++) {
  console.log("Add" + " " + foods[x] + " " + "to shopping list");
}

// YOU DO: Create an array of numbers and then iterate over that array to log double
// of each of the number. (Ex: 4 doubled is 8.)

var nums = [1, 1, 2, 3, 5, 8]

for (var y = 0; y < nums.length; y++) {
  console.log(nums[y] * 2);
}

// YOU DO: Using the array of names below, print out "Happy Birthday <name>" for
// each name except the first two.
var names = ["Sevy", "Lindsey", "Jericho", "Raeonna", "Latrina", "Jhana", "Luca"];

for (var r = 2; r < names.length; r++) {
  console.log("Happy Birthday" + " " + names[r]);
}


// THE FINAL YOU DO: Using the array of ages below, print out a statement for each age.
// The age should determine which message is printed out:
  // Under 18? "Oh no, you can't vote quite yet."
  // 18 or over? "Make sure you get out and vote!"

// WORD FROM THE WISE: Before you start coding, jot down, with pen and paper, what steps you
// want to tell the program to take. Think of all the concepts you've learned so far.

// Remember, stuck for 15-20 minutes? Reach out to your pre-work group on Slack.

var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];

for (var a = 0; a <ages.length; a++) {

  if (ages[a] >= 18) {
    console.log("Make sure you get out and vote!");
  } else {
    console.log("Oh no, you can't vote quite yet.");
  }
}
