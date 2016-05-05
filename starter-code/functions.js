// Question 1
function maxOfTwoNumbers(a,b) {
  (a > b)?  x = a :  x = b;
  return x
}
console.log("Q1: Max of 8 and 15 is " + maxOfTwoNumbers(8,15))

// Question 2
function maxOfThree(a,b,c) {
    x = a;
    (x > b)?  x = a :  x = b;
    (x > c)?  x = x :  x = c;
    return x
}
console.log("Q2: Max of 8, 10, and 9 is " + maxOfThree(8,10,9))

// Question 3
function isCharacterAVowel(c) {
    return ("aeiou".indexOf(c.toLowerCase())===0)
}
console.log("Q3: 'X' is a vowel? " + isCharacterAVowel('X'))
console.log("Q3: 'A' is a vowel? " + isCharacterAVowel('A'))

// Question 4
function sumArray(arr) {
    q4sum = 0
    arr.forEach(function(d){q4sum+=d})
    return q4sum
}
console.log("Q4: sumArray([2,3,9]) = " + sumArray([2,3,9]))

// Question 4
function multiplyArray(arr) {
    q4product = 1
    arr.forEach(function(d){q4product*=d})
    return q4product
}
console.log("Q4: multiplyArray([2,3,9]) = " + multiplyArray([2,3,9]))

// Question 5
function numberOfArguments(){
  return arguments.length
}
console.log("Q5: numberOfArguments('one','two','three') has " + numberOfArguments('one','two','three') + " arguments.")

// Question 6
function reverseString(str){
  q6 = ""
  for (i=str.length-1;i>=0;i--){
    q6 = q6 + str[i]
  }
  return q6
};
console.log("Q6: The reverse of 'marsha brady' is " + reverseString('marsha brady'))

// Question 7
function findLongestWord(arr7) {
  longest = arr7[0];
  arr7.forEach(function(v){
    if (v.length > longest.length) {longest = v}
  })
  return longest;
}
console.log("Q7: The longest word in ['Eschew','obfuscation','!'] is " + findLongestWord(['Eschew','obfuscation','!']))

// Question 8
function filterLongWords(arrayOfWords,i) {
  arr8 = []
  arrayOfWords.forEach(function(v){
    if (v.length>i){arr8.push(v)}
  })
  return arr8;
}
console.log("Q8: The words longer than 4 in ['catch','a','falling','star'] are " + filterLongWords(['catch','a','falling','star'],4))


// Bonus 1
// (hint: `prototype`)
String.prototype.reverseString = function(){
  bonus1 = ""
  for (i=this.length-1;i>=0;i--){
    bonus1 = bonus1 + this[i]
  }
  return bonus1
};
console.log("Bonus1:  The result of 'live'.reverseString() is "+'live'.reverseString())

// Bonus 2
function charactersOccurencesCount(str) {
  bonus2 = {};                        // set up the object to hold the answers
  strArray = str.split('');           // to analyze its contents, we need to make the string argument into an array
  for (var key in strArray) {         // so we can iterate over it
    ltr = strArray[key];              // Let's set the first member of the the array (i.e., first letter) as a variable
    if (bonus2.hasOwnProperty(ltr)) { // Check to see if our result array already has a member matching or first letter
      bonus2[ltr] += 1;               // If it is found, increment the value (the number pair) for the key (the letter in the string)
    } else {
      bonus2[ltr] = 1;                // If it doesn't yet exist, give the key a value of 1
    }
  }
  return bonus2;
}
console.log("Bonus2: Here are the occurences for 'occurences': ");console.log(charactersOccurencesCount('occurences'));
