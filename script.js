let markWeight = 78;
let markHeight = 1.69;
let johnHeight = 1.95;
let johnWeight = 92;

markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);
johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// ternary operator example
const bill = 430;
const tip = bill >=50 && bill <=300 ? bill * .15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);