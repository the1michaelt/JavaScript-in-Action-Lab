// Task 1: Days of the week
// Create a variable called dayOfWeek assign it a value of the string Monday.
let dayOfWeek;
dayOfWeek = "Monday";

// Print dayOfWeek to the console
console.log(dayOfWeek);

// On the following line, change the value of dayOfWeek so that it has the value Friday. 
dayOfWeek = "Friday";

// Print the statement “I can’t wait for Friday!” using the dayOfWeek variable
console.log(`I can't wait for ${dayOfWeek}!`)

// Put down a breakpoint on the first line of your code in the browser and run your code with the debugger.

// Use the Step Into button to go from line to line.Hover your mouse over the dayOfWeek variable every place it is used to see its current value change from Monday to Friday before it is printed

// Task 2: User Input
// Create a variable called animalInput and set it equal to the prompt function call with the phrase “What is your favorite animal ?”
let animalInput;
animalInput = prompt(`What is your favorite animal?`);

// Create another variable called colorInput and set it equal to the prompt function call with the phrase “What is your favorite color ?”
let colorInput;
colorInput = prompt(`What is your favorite color?`)
// Combine these two variables within a string so you can print the phrase “I’ve never seen a < color > <animal>!”

let animalColor;
animalColor = colorInput + ' ' + animalInput;
console.log(`I've never seen a ${animalColor}!`)

// Before starting the next section, think of your favorite breakfast, your favorite lunch, and your favorite dinner.
// Write these three things in some comments in your code.
// Remember to start a line with // to designate it as a comment


// my Favorite Breakfast = waffles
// my Favorite Lunch = meatballs'
// my Favorite Dinner = lasagne

// Task 1: Meals
// Create a variable called timeOfDay and give it the value 1300
let timeOfDay;
timeOfDay = 300;
let myFavoriteMeal;
if (timeOfDay >= 0 && timeOfDay < 1200) {
    myFavoriteMeal = `waffles`;
}
else if(timeOfDay >= 1200 && timeOfDay < 1700){
    myFavoriteMeal = `meatballs`;
}
else if(timeOfDay >= 1700){
    myFavoriteMeal = `lasagna`;
}
console.log(myFavoriteMeal);

// Now try to ‘break’ this section of code by giving timeOfDay a value that will cause an error.Think about how the variable is being used and what types of values would not make sense to be used that way.Run the code again to see the error get thrown.

// timeOfDay = D;  //"Uncaught Reference Error: D is not defined"
// timeOfDay = %; // Uncaught Syntax Error: Unexpected Token '%'
// timeOfDay = -34; // not an error but illogical

// After you have successfully caused this section of code to throw an error, place a breakpoint on the first line of code in the file and debug the program.Watch how it will run all previous code until it encounters the line where the error occurs.



// Task 2: Random Number
// Declare a variable to store a random number between 0 and 10. You will need to do some research to determine how to generate a random number in JavaScript. 
// A good search term to use: “random number JavaScript” 
// If the number is between 0 and 2, print to the console “Beatles” 
// If the number is between 3 and 5, print to the console “Stones” 
// If the number is between 6 and 8, print to the console “Floyd” 
// If the number is equal to 9 or 10, print to the console “Hendrix”    

// “For” Loops
// In JavaScript, loops are an important tool that allow developers to execute a block of code over and over as long as a condition holds true.This section will allow you to practice a for loop and while loop.


