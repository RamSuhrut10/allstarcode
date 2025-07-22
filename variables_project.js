//Program 1: The value of 1 is being stored in variable 'x'
//Program 2: It prints "The value of x is 1"
//Program 3: It prints "All Star Code!"
//Program 4: It prints the answers to adding the variables which is "50", "ABCdef", "2030"
//Program 5: It prints the sum of num1 and num2 which is 13. num1 value was updated.
//Program 6: It prints 8, since num1 was updated after the print statement.
//Program 7: It prints 2, since luckyNumber is a constant variable meaning it can't be updated

// Prices and quantities
let regularTicketPrice = 45;
let frontRowTicketPrice = 75;
let regularTicketCount = 4;
let frontRowTicketCount = 2;

// Calculations
let cost = (regularTicketPrice * regularTicketCount) + (frontRowTicketPrice * frontRowTicketCount);
let markupRate = 1.5;
let sellerFeeRate = 0.2;

let sellingPrice = cost * markupRate;
let sellerFee = sellingPrice * sellerFeeRate;
let profit = sellingPrice - cost - sellerFee;

// Output
console.log('Cost:', cost);
console.log('Selling price:', sellingPrice);
console.log('Seller fee:', sellerFee);
console.log('Profit:', profit);