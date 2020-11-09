




// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.




function disemvowel(str) {

    return str.replace(/[aeiou]/gi, "");



}




// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.


function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a && arr[i + 1] === b) {
            return true
        }
        else if (arr[i] === b && arr[i + 1] === a) {
            return true
        }
        else if (arr[i] === a && arr[i + 1] !== b) {
            return false
        }
        else if (arr[i] === b && arr[i + 1] !== a) {
            return false
        }
    }
}




// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.



function checkExam(correctAnswers, studentAnswers) {
    //start with a score of 0
    var score = 0;
    //loop through the array of correct answer
    for (var i = 0; i < correctAnswers.length; i++) {
        //if the answer matches the students answer add 4 to the score
        if (correctAnswers[i] === studentAnswers[i]) {
            score += 4;
        }
        //if the student has an empty string for an answer, add nothing to the score
        else if (studentAnswers[i] === "") {
            score -= 0;
        }
        //if the student has an answer that is not correct and not an empty string, deduct 1 point from their score
        else {
            score -= 1
        }
    }
    //if the score is a negative number (below 0), just return 0 as the score
    if (score < 0) {
        score = 0;
    };
    return score;
};



// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True


function solve(s) { return "abcdefghijklmnopqrstuvwxyz".includes([...s].sort().join``) }



// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity


function capitalize(s) {
    return [s.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join(''),

    s.split('').map((c, i) => i % 2 !== 0 ? c.toUpperCase() : c.toLowerCase()).join('')


    ]
};



// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

function solve(a, b) {
    let result = []
    for (let item of b) {
        result.push(a.filter(word => item === word).length)
    }
    return result
}



// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.


function evensAndOdds(num) {
    if (num % 2 === 0) {
        return num.toString(2);
    }
    else if (num % 2 != 0) {
        return num.toString(16);
    }
}