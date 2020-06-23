/*
var firstName = 'John';
console.log(firstName);

var lasName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher'
console.log(job)

//This is some random comment

*/
/*

// Type coertion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)

*/

/*****************************
* Basic operations
*/

/*

var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;


// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/
/*

var  now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);


// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


//Multiple Assignments
var x, y;
x = y = (3 +5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); 


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++ // x = x + 1 // x += 1
console.log(x)

*/
/*

var johnMass, markMass, johnHeight, markHeight;
johnMass = 80; //kg
markMass = 70; //kg
johnHeight = 1.88; // meters
markHeight = 1.79; // meters

var johnBMI, markBMI;
johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * johnHeight);
                      
var johnBMIisGreater;
johnBMIisGreater = markBMI > johnBMI;

console.log('John\'s BMI: ' + johnBMI);
console.log('Mark\'s BMI: ' + markBMI);
console.log('Is Mark\'s BMI higher than John\'s? ' + johnBMIisGreater);

*/
/*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var johnMass, markMass, johnHeight, markHeight;
johnMass = 80; //kg
markMass = 70; //kg
johnHeight = 1.88; // meters
markHeight = 1.79; // meters

var johnBMI, markBMI;
johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * johnHeight);
                      
var johnBMIisGreater;
johnBMIisGreater = markBMI > johnBMI;

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s')
} else {
    console.log('John\'s BMI is higher than Mark\'s')
}

// console.log('Is Mark\'s BMI higher than John\'s? ' + johnBMIisGreater);

*/

//Boolean logic
/*
var firstName = 'John';
var age = 25;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age <30) {
    console.log(firstName + ' is a young man.');  
} else {
    console.log(firstName + ' is a man.');
}

*/
/*

// The Ternary Operator and Switch Statements

// Ternary Operator
var firstName = 'John';
var age = 25;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');


var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink + '.');

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

/*
//Switch Statements
var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Porto Alegre.');
        break
    default:
        console.log(firstName + ' does something else.');
}



switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a youg adult.');
        break;
    case age >= 30:
        console.log(firstName + ' is a man.');
        break;
    default:
        console.log('We don\'t know ' + firstName + '\'s age.');
        
}

*/

/*
// Truthy and Falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined')
}


// Equality operators

if (height == '23') {
    console.log('The == operator does type coercion!');
}

*/

/*
var averageScoreJohn, averageScoreMike, averageScoreMary;
averageScoreJohn = (89 + 120 + 103) / 3;
averageScoreMike = (89 + 120 + 103) / 3;
averageScoreMary = (89 + 120 + 103) / 3;
*/

/*
averageScoreJohn > averageScoreMike ? console.log('John\'s team tops Mike\'s team with an average score of ' + averageScoreJohn + ' (vs. ' + averageScoreMike + ').')
: console.log('Mike\'s team tops John\'s team with an average score of ' + averageScoreMike + ' (vs. ' + averageScoreJohn + ').');
*/

/*
switch (true) {
    case averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary:
        console.log('John\'s team is the highest scoring team, averaging ' + averageScoreJohn + ' points per game.');
        break;
    case averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary:
        console.log('Mike\'s team is the highest scoring team, averaging ' + averageScoreMike + ' points per game.');
        break;
    case averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike:
        console.log('Mary\'s team is the highest scoring team, averaging ' + averageScoreMary + ' points per game.');
        break;
    default:
        console.log('The teams averaged the same point per game (' + averageScoreMike + ').');
}
*/




// Functions
/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1996);
var ageMike = calculateAge(1940);
var ageJane = calculateAge(2001);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1996, 'John');
yearsUntilRetirement(1940, 'Mike');
yearsUntilRetirement(2001, 'Jane');

*/

// Function expression
/*
var whatDoYouDo = function(job, firstName){
  switch(job) {
      case 'teacher':
        return firstName + ' teaches kids how to code';
      case 'driver':
        return firstName + ' drives people around town';  
      case 'designer':
        return firstName + ' designs beautiful websites';  
      default:
        return firstName + ' does something else'
  }  
} 

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));

*/

// Arrays
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

console.log(names);
console.log(names.length);


// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


// Different data types
var john = ['John','Smith',1996,'teacher',false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1996));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);

*/

/*
// My solution
var checkPrice = [124, 48, 268];

var tipCalculator = function(checkPrice) {
  switch(true) {
      case (checkPrice <50):
        return checkPrice * 0.2;
      case (checkPrice >=50 && checkPrice <200):
        return checkPrice * 0.15;  
      case  (checkPrice >=200):
        return checkPrice * 0.1; 
  }  
} 

var checkPrice = [124, 48, 268];
var tips = [tipCalculator(checkPrice[0]),
            tipCalculator(checkPrice[1]),
            tipCalculator(checkPrice[2])];


var finalBill = [checkPrice[0] + tips[0],
                 checkPrice[1] + tips[1],
                 checkPrice[2] + tips[2]];

console.log(tips, finalBill);

*/

// Objects and properties
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/


// Objects and methods
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2020 - this.birthYear;
    }
};


// Option 1
var age = john.calcAge();
john.age = age;

// Option 2
john.age = john.calcAge();
*/
/*
// Option 3
john.calcAge();
console.log(john);

*/


// Coding Challenge 4
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.78,
    weight: 95,
    calculateBMI: function() {
        this.BMI = this.weight / (this.height * this.height)
        return this.BMI;
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Johnson',
    height: 1.85,
    weight: 86,
    calculateBMI: function() {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
}


if(john.calculateBMI() > mark.calculateBMI()) {
    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI (' + john.BMI + ') than Mark\'s (' + mark.BMI + ').');
} else if (mark.calculateBMI() > john.calculateBMI()){
    console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI (' + mark.BMI + ') than John\'s (' + john.BMI + ').');
} else {
    console.log('They have the same BMI');
}

*/


// Loops and iteration
/*
// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

    // i = 0 , 0 < 10 true, log i to console, i++
    // i = 1 , 1 < 10 true, log i to console, i++
    // ...
    // i = 10 , 10 < 10 false, exit the loop!


var john = ['John','Smith',1996,'teacher',false];

for (i = 0; i < john.length; i++) {
    console.log(john[i]);
}


// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/


// continue and break statements
/*
var john = ['John','Smith',1996,'teacher',false,'blue'];

for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}


// looping backwards

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);    
}
*/



// Coding Challenge 5
// My Solution
var checkPrice = [124, 48, 268, 180, 42];
var tips = [];
var bill = [];

var tipCalculator = function(checkPrice) {
  switch(true) {
      case (checkPrice <50):
        return checkPrice * 0.2;
      case (checkPrice >=50 && checkPrice <200):
        return checkPrice * 0.15;  
      case  (checkPrice >=200):
        return checkPrice * 0.1; 
  }  
} 

for (i = 0; i < checkPrice.length; i++) {
    tips.push(tipCalculator(checkPrice[i]));
}

console.log(tips);

for (i = 0; i < checkPrice.length; i++) {
    bill.push(checkPrice[i]+tips[i]);
}

console.log(bill);


// Instructor's solution

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + ' pays higher tips, whith an average of ' + john.average + ' dollars.')
} else {
    console.log(mark.fullName + ' pays higher tips, whith an average of ' + mark.average + ' dollars.')
}











