//Program 1: Output: @#
//Program 2: Output: @
//Program 3: Output: @^
//Program 4: Output: 25
//Program 5: Output: true blocks are executed

//Part 2:
let randomNumber = Math.floor(Math.random() * 101);
let user_guess = Number(process.argv[2]); // cast input to number

console.log("Your guess:", user_guess);
console.log("The random number generated:", randomNumber);

if (user_guess < randomNumber) {
    console.log("Too Low");
}
else if (user_guess > randomNumber) { 
    console.log("Too High");
}
else {
    console.log("You are Correct!!!!");
}

//Part 3:
let user_input = process.argv[3];
let score = 0;

if (user_input === "A") {
    score -= 1;
    console.log("Wrong answer :(");
}

if (user_input === "B") {
    score -= 1;
    console.log("Wrong answer :(");
}

if (user_input === "C") {
    score += 5;
    console.log("RIGHT ANSWER! WOHOO!!!");
}

if (user_input === "D") {
    score -= 50;
    console.log("Bad bad bad...");
}

if (user_input === "I.KNOW.THE.SECRET") {
    score += 1000000;
    console.log("Welcome to NIRVANA");
}

else {
    console.log("Invalid response...")
}

console.log("Score:", score);