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
    if (v.length>max){arr8.push(v)}
  })
  return arr8;
}
console.log("Q8: The words longer than 4 in ['catch','a','falling','star'] are " + filterLongWords(['catch','a','falling','star'],4))


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

