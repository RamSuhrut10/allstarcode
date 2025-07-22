//Program A: The first line prints 'B', the second line prints 'D', and the third line prints nothing since there is no fifth index.
//Program B: The first two lines print 'Mon' and 'Sun.' The third line prints the length which is 7. The fourth line prints the seventh index of the list, which is nothing. The last line prints the 6th index of the list since it is 'length - 1,' which would be Sun.
//Program C: First line would print the whole array. Second line prints first two elements. Last line prints an empty list, since the value of length is equal to 0.

//Part 2:
let scores = [85, 93, 65, 65, 92, 81, 93];

let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let average = sum / scores.length;

console.log('Average:', average);

//Part 3:
console.log("Transformation #1:");
let myArray1 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray1);
myArray1.reverse();
console.log("After:", myArray1);
console.log("\n");

console.log("Transformation #2:");
let myArray2 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray2);
myArray2.push(1, 2);
console.log("After:", myArray2);
console.log("\n");

console.log("Transformation #3:");
let myArray3 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray3);
myArray3.pop();
console.log("After:", myArray3);
console.log("\n");

console.log("Transformation #4:");
let myArray4 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray4);
myArray4.splice(1, 1);  // remove 'b'
myArray4.push('e');
console.log("After:", myArray4);
console.log("\n");

console.log("Transformation #5:");
let myArray5 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray5);
let reversedSubset = myArray5.slice(0, 3).reverse();
myArray5 = ['f', 'e', ...reversedSubset];
console.log("After:", myArray5);
console.log("\n");