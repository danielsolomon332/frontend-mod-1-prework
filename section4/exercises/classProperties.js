/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

/*

class Dog {

}

var yellowLab = new Dog();
var blackLab = new Dog();

console.log(yellowLab);
console.log(blackLab);

// Prompt 2: Snack

class Snack {

}

var cheetos = new Snack();
var cheezits = new Snack();

console.log(cheetos);
console.log(cheezits);

// Prompt 3: Shirt

class Shirt {

}

var tee = new Shirt();
var longSleeve = new Shirt ();

console.log(tee);
console.log(longSleeve);

*/

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

/*
  class Dog {
    constructor() {
      this.height = 3;
      this.age = 8;
      this.color = "brown";
    }
  }

var beagle = new Dog();

console.log(beagle);

  // Prompt 2: Snack

  class Snack {
    constructor() {
      this.taste = "Sour";
      this.numberOfPieces = 35;
      this.colors = 7;
    }
  }

var sourPatchKids = new Snack();

console.log(sourPatchKids);

  // Prompt 3: Shirt

  class Shirt {
    constructor() {
      this.material = "cotton";
      this.size = "medium";
      this.numerOfShirts = 13;
    }
  }

  var cutOff = new Shirt();
  console.log(cutOff);

*/

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog {
  constructor(dogName, dogAge, dogColor) {
    this.name = dogName;
    this.age = dogAge;
    this.color = dogColor;
  }
}

var beagle = new Dog("Phil", 7, "brown");
var yellowLab = new Dog("Peanut", 2, "Yellow");

console.log(beagle);
console.log(yellowLab);

// Prompt 2: Snack

class Snack {
  constructor(snackTaste, snackPieces, snackNumberOfColors) {
    this.taste = snackTaste;
    this.numberOfPieces = snackPieces;
    this.colors = snackNumberOfColors;
  }
}

var sourPatchKids = new Snack("sour", 28, 7);
var skittles = new Snack("sweet", 49, 6);

console.log(sourPatchKids);
console.log(skittles);

// Prompt 3: Shirt

class Shirt {
  constructor(shirtMaterial, shirtSize, shirtCount) {
    this.material = shirtMaterial;
    this.size = shirtSize;
    this.numberOfShirts = shirtCount;
  }
}

var cutOff = new Shirt("Cotton", "Large", 9);
var sweater = new Shirt("Wool", "Medium", 3)

console.log(cutOff);
console.log(sweater);
