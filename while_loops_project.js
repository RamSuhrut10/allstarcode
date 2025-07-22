//Part 1a:
let start = 100;
while (start >= 0) {
    console.log(start)
    start--;
}
//Part 1b:
userInput = process.argv[2];
while (userInput >= 0) {
    console.log(userInput);
    userInput--;
}

//Part 3:
let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);

while (num1 != num2) {
  console.log("Generated: " + num1 + " and " + num2 + " -> Not equal");
  num1 = Math.floor(Math.random() * 11);
  num2 = Math.floor(Math.random() * 11);
}

console.log("Generated: " + num1 + " and " + num2 + " -> Match! Program ends.");