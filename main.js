// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum(number1, number2) {
  number3 = number1 + number2;
return number3 ;
}
// write your console.log/asserts here:
console.log(sum(1,1));
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,3), 5);
console.assert(sum(1,0), 1);
console.assert(sum(-48,5), 43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function avg(number1, number2, number3) {
  number4 = (number1 + number2 + number3)/3;
  return number4;
}
// write your console.log/asserts here:
console.log(avg(1,1,1));
// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength(string) {
  length = string.length;
  return length;
}
// write your console.log/asserts here:
console.log(getLength('Jennifer'));

// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(number1, number2) {
  if (number1 < number2) {
    return 'true';
  } else {
    return 'false';
  }
}
// write your console.log/asserts here:
console.log(greaterThan(4,8));

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formated like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet (name) {
  return 'Hello, ' + name;
}
// write your console.log/asserts here:
console.log(greet('Jennifer'));

// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madLib(word1, word2, word3, word4) {
  sentence = 'She took the ' + word1 + ' and ' + word2 + ' with her to ' + word3 + ' and ate ' + word4;
  return sentence;
}
// write your console.log/asserts here:
console.log(madLib('cat', 'dog', 'mouse', 'horse'));

// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(number1, number2) {
  if (number1>number2) {
    return number1;
  } else {
    return number2;
  }
}
// write your console.log/asserts here:
console.log(max(1,9));

// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree(number1, number2, number3) {
  if(number1>number2 && number1>number3) {
  return number1;
} else if(number2>number1 &&number2>number3) {
  return number2;
} else if (number3>number1 && number3>number2) {
  return number3;
}
}
// write your console.log/asserts here:
console.log(maxOfThree(1,2,3));
// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
function isVowel(character) {
  if(character === 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
    return 'true';
  } else {
    return 'false';
  }
}
// write your console.log/asserts here:
console.log(isVowel('h'));

// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function translate(text) {

}
// write your console.log/asserts here:


// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:
function reverse(string) {
  reversal = string.split('').reverse('').join('');
  return reversal;
}
// write your console.log/asserts here:
console.log(reverse('hat'));

// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
var largestNumber = 0;

var numbers = [1, 2, 3, 4];

var largest = function largest(numbers) {
  for(var i = 0; i<numbers.length; i++)
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }

  return largestNumber;
};
// write your console.log/asserts here:
console.log('the largest number in the `numbers` array is ', largest(numbers));
console.assert(largest(numbers), 101);

console.log(largest([1,2,3,4]));

// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:
var longString = '';

var stringArr = ['cat', 'cats', 'horse'];

function longest(stringArr) {
  for(var i = 0; i<stringArr.length; i++) {
    if (stringArr[i].length > longString.length)
    longString = stringArr[i];
  }
  return longString;
}
// write your console.log/asserts here:
console.log(longest(stringArr));

// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:

var theArray = [ ];

function getEvens(numArray) {
  for(var i = 0; i<numArray.length; i++) {
    if(numArray[i] % 2 === 0) {
      theArray.push(numArray[i]);
    }
    }
    return theArray;
}
// write your console.log/asserts here:
  console.log(getEvens([1,2,3,4]));

// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:
var theArray = [ ];

function getOdds(numArray) {
  for(var i = 0; i<numArray.length; i++) {
    if(numArray[i] % 2 !== 0) {
      theArray.push(numArray[i]);
    }
    }
    return theArray;
}
// write your console.log/asserts here:
console.log(getOdds([1,2,3,4]));

// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:
var newStringArray = [];

function containsIs(stringArray) {
  for(var i =0; i<stringArray.length; i++) {
    if(stringArray[i].includes('is')) {
    newStringArray.push(stringArray[i]);
  }
}
  return newStringArray;
}
// write your console.log/asserts here:
console.log(containsIs(['this is a string', 'this is an array', 'functions are hard']));

///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
