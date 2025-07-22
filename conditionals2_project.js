//Part 1:
//Order of Blanks: False, True, True, False
//Part 2:

let input = process.argv[2];
let score = Number(input);

if (input === undefined || input === "") {
    console.log("You didn't enter anything!");
}

if (score < 0 || score > 100) {
    console.log("Invalid score. Must be between 0 and 100.");
}

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
    console.log("Congrats!!! Keep it up!");
}

if (score >= 80 && score < 90) {
    console.log("Grade: B");
    console.log("Good work. Keep at it.");
}

if (score >= 70 && score < 80) {
    console.log("Grade: C");
    console.log("Please try harder");
}

if (score >= 60 && score < 70) {
    console.log("Grade: D");
    console.log("Please try harder");
}

if (score >= 0 && score < 60) {
    console.log("Grade: F");
    console.log("Come see me :(");
}

if (isNaN(score)) {
    console.log("INVALID!");
}