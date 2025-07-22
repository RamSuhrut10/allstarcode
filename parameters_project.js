//Part 1:
function evenOrOdd(num) {
    console.log('your number is: ', num);
    if (num % 2 !== 0) {
        console.log('odd');
    }

    else {
        console.log('even');
    }
}

evenOrOdd(7);
evenOrOdd(6872);
evenOrOdd(-5);
evenOrOdd(0);

//Part 2:
function divisor(num1, num2) {
    if (num1 % num2 !== 0) {
        console.log(num1 + " is NOT divisible by " + num2);
    }

    else {
        console.log(num1 + " is divisible by " + num2);
    }
}

divisor(9,3);
divisor(27,5);
divisor(10001,10);
divisor(598,13);

//Part 3:

function distanceCalculator(name1, x1, y1, name2, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    var distance = Math.sqrt(dx * dx + dy * dy);

    console.log("The distance between " + name1 + " and " + name2 + " is: " + distance);
}

distanceCalculator("Michael", 3.28, 2.26, "Antony dos Santos", 3.92, 3);
distanceCalculator("you", 0, 0, "I", 0, 0);

//Part 4:

function arrayHandler(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            console.log(arr[i]);
        }
    }
}

// Example usage:
arrayHandler(["apple", 100, true, "banana", false, "pear"]);