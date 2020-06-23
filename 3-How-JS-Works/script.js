// Hoisting
/*
calculateAge(1965);
//Function Declaration
function calculateAge(year) {
    console.log(2020 - year);
}


//retirement(1990);
// Function Expression
var retirement = function(year) {
    console.log(65 - (2020 - year));
}


// Variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/


// Scoping
// example 1
/*
var a = 'Hello!';
first();

function first () {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// The this keyword
// // Regular function: points at the global object
// // Method call: points to the object that is calling the method

// console.log(this); // Window object is the default object
/*
calculateAge(1996);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this); // Regular function call, not a method
}
*/


var john = {
    name: 'John',
    yearOfBirth: 1996,
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth)
        console.log(this);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();




















