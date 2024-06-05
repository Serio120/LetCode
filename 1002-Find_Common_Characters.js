/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    // Initialize the result array with the first word's characters
    let common = words[0].split('');
    
    // Iterate through each word starting from the second word
    for (let i = 1; i < words.length; i++) {
        let currentWordChars = words[i].split('');
        let newCommon = [];
        
        // Iterate through the common characters and check if they are in the current word
        for (let char of common) {
            let index = currentWordChars.indexOf(char);
            if (index !== -1) {
                newCommon.push(char);
                currentWordChars.splice(index, 1); // Remove the found character to handle duplicates
            }
        }
        
        // Update common array to reflect only the characters found in the current word
        common = newCommon;
    }
    
    return common;
};

// Example usage
console.log(commonChars(["bella","label","roller"])); // Output: ["e","l","l"]
console.log(commonChars(["cool","lock","cook"])); // Output: ["c","o"]
