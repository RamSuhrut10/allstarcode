//Project 1: The output would be undefined because PICHU is in the second index while the third index is supposed to be printed
//Project 2: The output would be PIKACHU because that is in the third index of the line of code
//Project 3: The output would be BooooooSpoooooooky because that is in the second index of the line of code. The second line would be undefined because there is no element in the third index. Lastly, the third line won't run since it is a comment
//Project 4: The output would be 2 for the first console.log statement. The output for the second console.log statement would be undefined since there is no element in the 4th index
//Project 5: The output would be "two" because that is in the second index of the line and the other output would be "three" because that is in the 4th index of the line of code.

//Project:
let n = process.argv[2]
let age = process.argv[3]
let gender = process.argv[4]
let DOB = process.argv[5]
let phone = process.argv[6]

console.log("Name: ", n)
console.log("Age: ", age)
console.log("Gender: ", gender)
console.log("Date of Birth: ", DOB)
console.log("Phone No.: ", phone)