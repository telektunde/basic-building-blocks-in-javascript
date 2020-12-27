//condition

let variable = 12;

let myVariable =false;

if (myVariable === true) {
    console.log('The conditon has been evaluted to true');
} else {
    console.log('The condition has been evaluted to false');
}

let a = 2;
if (a<5) {
    console.log(a / 2);
} else {
    console.log(a*2);
}

//Loops

let bookCount = 10;

for (let i = 0; i < bookCount; i++) {
}

for (let i=0; i <=20; i++) {
    if (i%2 == 0) {
        console.log(i);
        } 
}

//Functions

let payBill = (amount, beneficiary) => {
};

let add = (a, b) => {
    return a + b;
};

console.log(add(1, 2));

let printNumbersTill = (x) => {
    for (let i=1; i<=x; i++) {
        console.log(i);
    }
    return x;
};

printNumbersTill(20);
printNumbersTill(15);

let getGreetingTo = (name) => {
    console.log('Hello ' + name + '!');
    return name;
}

getGreetingTo('Mark');

//For loops and arrays

let printValues = (array) => {
    for (let i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}

printValues([0, 3, 6, 7, 9]);

let myNumbers = [10, 20, 30, 50, 12];

myNumbers.forEach((number) => {
    console.log(number);
});

let printValues_2 = [0, 3, 6, 7, 9];

printValues_2.forEach((number) => {
    console.log(number);
});
