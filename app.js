
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."


function FuelChecking() {
    try {
        const Fuelremaining = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));
        
        if (remainingFuel < 0.25) {
            console.log("Please refill the fuel in your car. ");
        } else {
            console.log("Enough fuel in car");
        }
    } 
}

checkFuel();


// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.
// Function to calculate grade and remarks based on percentage
function CalMarksandRemarks(percentage) {
    let grade, remarks;

    if (percentage >= 90) {
        grade = "A+";
        remarks = "Excellent!";
    } else if (percentage >= 80) {
        grade = "A";
        remarks = "Very Good!";
    } else if (percentage >= 70) {
        grade = "B";
        remarks = "Good!";
    } else if (percentage >= 60) {
        grade = "C";
        remarks = "Satisfactory!";
    } else if (percentage >= 50) {
        grade = "D";
        remarks = "Average!";
    } else {
        grade = "F";
        remarks = "Work Hard!";
    }

    return [grade, remarks];
}

// Function to calculate percentage
function Calpercentage(totalMarks, obtainedMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

// Taking input from the user
const Sub1 = parseFloat(prompt("Obtain marks Sub1"));
const Sub2 = parseFloat(prompt("Obtain marks Sub2"));
const Sub3 = parseFloat(prompt("Obtain marks Sub3"));
const totalMarks = parseFloat(prompt("Enter total marks for one subject"));

// Calculating total obtained marks
const totalObtainedMarks = Sub1 + Sub2 + Sub3;

// Calculating percentage
const percentage = Calpercentage(totalMarks * 3, totalObtainedMarks);

// Calculating grade and remarks
const [grade, remarks] = CalMarksandRemarks(percentage);

// Displaying the results
console.log(`Percentage : ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
console.log(`Remarks: ${remarks}`);


// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).
// Array with various data types
const literalArr = [null, undefined, true, false, NaN];

// Array of strings
const stringArr = ["Apple", "Samsung", "Nokia", "Oppo"];

// Array of numbers
const numberArr = [32, 9.8, -4, 0, 490];

// Array of booleans
const boolArr = [true, false, true, true, false];

// Array with mixed data types
const mixedArr = ["hello", 42, true, null, undefined];

// Array of qualifications
const qualificationArr = ["Bachelor's degree", "Master's degree", "Ph.D.", "Diploma"];

console.log("literalArr:", literalArr);
console.log("stringArr:", stringArr);
console.log("numberArr:", numberArr);
console.log("boolArr:", boolArr);
console.log("mixedArr:", mixedArr);
console.log("qualificationArr:", qualificationArr);

// 5)Write a program to store phone manufacturers in an array.
// Array of phone manufacturers
const phoneManufacturers = ["Apple", "Samsung", "Nokia", "Oppo", "Infinix", "Sony", "Techno", "LG"];

console.log("Phone Manufacturers:", phoneManufacturers);

// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.
// Array of student scores
const studentScores = [90, 72, 85, 65, 76, 87, 98, 55, 79, 89];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

console.log("Student Scores in ascending Order):", studentScores);

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].
const words = ["This", "is", "my", "cat"];

// Use the join() method to create a single string
const singleString = words.join(" ");

console.log("Single String:", singleString);

// 8)Implement the FIFO (First In First Out) approach using arrays.
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.items.shift();
        }
    }

    front() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}


const queue = new Queue();

queue.enqueue(15);
queue.enqueue(29);
queue.enqueue(45);
queue.enqueue(47);
console.log("Queue size:", queue.size());
console.log("Front element:", queue.front());

const dequeuedItem = queue.dequeue();
console.log("Dequeued item:", dequeuedItem);

console.log("Queue size:", queue.size());

// 9)// Implement the LIFO (Last In First Out) approach using arrays.
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}


const stack = new Stack();

stack.push(123);
stack.push(32);
stack.push(380);
stack.push(40);
stack.push(90);

console.log("Stack size:", stack.size());
console.log("Top element:", stack.peek());

const poppedItem = stack.pop();
console.log("Popped item:", poppedItem);

console.log("Stack size:", stack.size());


// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.
function ArraySearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}

// Example array
const items = ["apple", "banana", "cherry", "date", "grape", "kiwi", "orange"];

const userInput = prompt("Enter an item to search for: ");

const found = ArraySearch(items, userInput);

if (found) {
    console.log(`${userInput} is found in the list.`);
} else {
    console.log(`${userInput} is not found in the list.`);
}

// 11)Write a program to identify the largest number in the given array.
function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Example array
const numbers = [15, 7, 23, 4, 9, 12, 2, 19];

const largestNumber = findLargestNumber(numbers);
console.log("Largest Number:", largestNumber);

// 12)Write a program to identify the smallest number in the given array.
function findSmallestNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

// Example array
const numbers = [15, 7, 23, 4, 9, 12, 2, 19];

const smallestNumber = findSmallestNumber(numbers);
console.log("Smallest Number:", smallestNumber);

// 13)Write a program to print multiples of 5 ranging from 1 to 100.
console.log("Multiples of 5 ranging from 1 to 100:");

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.
function AdddDisplayNumber() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));

    const sum = num1 + num2;

    document.write(`<p>The sum of ${num1} and ${num2} is: ${sum}</p>`);
}

AdddDisplayNumber();

// 14)Repeat task1 for subtraction, multiplication, division & modulus.
//Subtraction
function SubDisplayNumber() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));

    const sub = num1 - num2;

    document.write(`<p>The difference of ${num1} and ${num2} is: ${sub}</p>`);
}

SubDisplayNumber();
//multiplication
function MulDisplayNumber() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));

    const mul = num1 * num2;

    document.write(`<p>The multiplication of ${num1} and ${num2} is: ${mul}</p>`);
}

MulDisplayNumber();

//division
function DivDisplayNumber() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));

    const Div = num1 / num2;

    document.write(`<p>The Division of ${num1} and ${num2} is: ${Div}</p>`);
}

DivDisplayNumber();
//modulus
function modDisplayNumber() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));

    const mod = num1 %num2;

    document.write(`<p>The modulus of ${num1} and ${num2} is: ${mod}</p>`);
}

modDisplayNumber();
//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."
const cityName = prompt("Enter a city name: ");

if (cityName.toLowerCase() === "karachi") {
    console.log("Welcome to the city of lights.");
} else {
    console.log("Welcome to " + cityName);
}

// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."
const gender = prompt("Enter your gender (Male/Female): ");

if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma'am.");
}

//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
const color = prompt("Select color of the road traffic signal (Red/Yellow/Green): ");

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready to move");
        break;
    case "green":
        console.log("Move");
        break;
    default:
        console.log("Invalid");
}
