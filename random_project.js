//Part 1:

let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);

console.log("Random Number 1:", num1);
console.log("Random Number 2:", num2);
console.log("Sum:", num1 + num2);

//Part 2:

let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let randomDay = days[Math.floor(Math.random() * days.length)];
let randomReaction = reactions[Math.floor(Math.random() * reactions.length)];

console.log("Your lucky day is:", randomDay);
console.log("Reaction:", randomReaction);

//Extra Credit:
//Part 1:

let min = 37;
let max = 54;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Your random number is:", randomNumber);

//Part 2:

let user_min = parseInt(process.argv[2]);
let user_max = parseInt(process.argv[3]);

let randomUserNumber = Math.floor(Math.random() * (user_max - user_min + 1)) + user_min;

console.log("Your random number is:", randomUserNumber);