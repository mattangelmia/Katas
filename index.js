




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