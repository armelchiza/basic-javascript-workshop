function firstLetter(inputString) {
    if (inputString === undefined) {
        return undefined;
    }
    else {
        return inputString[0];
    }
}

function lastLetter(inputString) {
    if (inputString === undefined) {
        return undefined;
    }
    else {
        return inputString[inputString.length-1];
    }
}

function letterAtPosition(inputString, position) {
    if (inputString === undefined) {
        return undefined;
    }
    if (position > inputString.length || position < 0){
        return undefined;
    }
    else {
        return inputString[position];
    }
}

function addTwoNumbers(num1, num2) {
    if (num1 === null || num2 === null || isNaN(num1) || isNaN(num2)){
        return undefined;
    }
    else {
        return (num1 + num2);
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (num1 === null || num2 === null || isNaN(num1) || isNaN(num2)){
        return undefined;
    }
    else {
        return (num1 * num2);
    }
}

function calculator(operation, num1, num2) {
    if (num1 === null || num2 === null || isNaN(num1) || isNaN(num2)){
        return undefined;
    }
    else {
        switch (operation) {
            case "add":
                return (addTwoNumbers(num1, num2));
            case "sub":
                return (addTwoNumbers(num1, num2*(-1)));
            case "mult":
                return (multiplyTwoNumbers(num1, num2));
            case "div":
                return(multiplyTwoNumbers(num1, (1/num2)));
            default:
                return(undefined);
        }
    }
}

function repeatString(inputString, numRepetitions) {
    var newString = "";
    if (typeof inputString != 'string' || isNaN(numRepetitions)){
        return (undefined);
    }
    else {
        for (i = 0; i < numRepetitions; i++){
            newString += inputString;
        }
    }
    return newString;
}

function reverseString(inputString) {
    var newString = "";
    if (typeof inputString != 'string'){
        return (undefined);
    }
    else {
        for (i = 1; i <= inputString.length; i++){
            newString += inputString[inputString.length-i];
        }
    }
    return newString;
}

function longestWord(inputString) {
    var words = inputString.split(" ");
    var longest = "";
    if (words.length > 0) {
        for (var i = 0; i<words.length; i++){
            if (words[i].length > longest.length){
                longest = words[i];
            }
        }
    }
    return longest;
}

function capitalize(inputString) {
    if (typeof inputString != 'string'){
        return (undefined);
    }
    else {
        theWords = inputString.split(" ");
        outCommingString = "";
        for (i = 0; i< theWords.length; i++){
            var wordAdjusted = "";
            for (j=0; j< theWords[i].length; j++){
                if(j==0){
                    wordAdjusted += theWords[i][j].toUpperCase();
                }
                else {
                    wordAdjusted += theWords[i][j].toLowerCase();
                }
            }
            
            if (i > 0 && i != theWords.length){
                outCommingString += " ";
            }
            outCommingString += wordAdjusted;
        }
        return outCommingString;
    }
}

function sumOfNumbers(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers)){
        var sum = 0;
        for (i=0; i<arrayOfNumbers.length; i++){
            
            if (Array.isArray(arrayOfNumbers[i])){
                return(undefined);
            }
            if (!isNaN(arrayOfNumbers[i])){
                sum += arrayOfNumbers[i];
            }
        }
        return sum;
    }
    else {
        return (undefined);
    }
}

function uniqueElements(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2)) {
        newArray = [];
        for(i=0; i<array1.length; i++){
            if (array2.indexOf(array1[i])<0 && newArray.indexOf(array1[i])<0){
                newArray.push(array1[i]);
            }
        }
        for(i=0; i<array2.length; i++){
            if (array1.indexOf(array2[i])<0 && newArray.indexOf(array2[i])<0){
                newArray.push(array2[i]);
            }
        }
        return(newArray);
    }
    else {
        return (undefined);
    }
}

function isPalindrome(inputString) {
    var r = inputString.replace(/[^a-zA-Z]+/g, '');
    if (r.length == 0 || r.length == 1) {
        return true;
    }
    else {
        var trueFalse = true;
        for(i=0; i< ((r.length / 2)+1); i++) {
            if (r[i].toLocaleLowerCase() !== r[r.length-1-i].toLocaleLowerCase()){
                trueFalse = false;
            }
        return trueFalse;
        }
    }
}

function wrapCharacter(inputString) { // FIGURING THIS ON OUT
    numStrings = Math.ceil(inputString.length/40);
    newString = "";
    for (i=0; i<numStrings-1; i++){
        if (i < numStrings -1){
            var adding = "";
            adding += inputString.slice(i*40, (i+1)*40) + "\n";
            if (adding[0] == " "){
                adding = adding.slice(1,adding.length-1);
            }
            newString += adding;
        }
        else{
            var adding = "";
            adding = inputString.slice(i*40, inputString.length-1);
            newString += adding;
        }
    }
    return (newString);
}
var answer = isPalindrome("cooc");
console.log(answer);


function wrapWord(inputString) {
    // Make this function return the input string wrapped to 40 characters max 
    // per line, but break the line by word. If a word is longer than 40 
    // characters, put it on its own line no matter how long it is, and move on 
    // to the next line. For example:

}

function bubbleSort(arrayOfNumbers) {
    // Make this function implement the "Bubble Sort" algorithm for sorting an 
    // array of numbers as input. Your function should sort the numbers in the 
    // input array. Here is the algorithm:
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};