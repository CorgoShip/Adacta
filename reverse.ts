const myPrompt = require('prompt-sync')();
const fs = require('fs');

module.exports.myReverse = (input:String) => {
    
    const reverse = [] // Creates array for result

    // ASCII representaion of characters
    // [a-z] = 97 - 122 
    // [A-Z] = 65 - 90
    // [0-9] = 48 - 57

    // iterates input string form end, change of case is done by addition or subtraction of the value "32"
    for (let index = input.length - 1; index >= 0 ; index--) {
        // const element = answer[index];
        const code = input.charCodeAt(index)

        if (code >= 48 && code <= 57) {   // any digit will be left without any modifications

            reverse.push(String.fromCharCode(code))

        } else if (code >= 65 && code <= 90) {  // characters [A-Z] will be changed to [a-z]

            reverse.push(String.fromCharCode(code + 32))

        } else if (code >= 97 && code <= 122) { // characters [a-z] will be changed to [A-Z]

            reverse.push(String.fromCharCode(code - 32))

        } else {
            // If input contains something else than alphanumeric characters scripr will terminate with code 1
            console.log("ERR: Ivalid input, use only alphanumeric characters")
            process.exit(1);
        }
    }
    
    return reverse.join("")
};

interface Report {
    input: String;
    output: String;
    duration: Number;
};

let originalWord = myPrompt('Write input string (string can contain only alphanumeric characters): ')

var startTime = performance.now()
let resultWord = module.exports.myReverse(originalWord) // Im only benchmarking function that does the heavy-lifting
var endTime = performance.now()

const report: Report = {
    input: originalWord,
    output: resultWord,
    duration: endTime - startTime
};  
    
// stringify JSON Object
var jsonContent = JSON.stringify(report, null, 4);
console.log(jsonContent);
    
fs.writeFile("processed.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    
    console.log("JSON file has been saved.");
});

