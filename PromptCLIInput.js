import promptSync from 'prompt-sync';
const prompt = promptSync();
function countString(str, letter) {
    // creating regex 
    const re = new RegExp(letter, 'g');
    // matching the pattern
    const count = str.match(re).length;
    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);