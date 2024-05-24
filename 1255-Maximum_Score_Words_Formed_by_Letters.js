/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    // Step 1: Count the frequency of each letter in the letters array
    let letterCount = Array(26).fill(0);
    for (let letter of letters) {
        letterCount[letter.charCodeAt(0) - 97]++;
    }

    // Step 2: Calculate the score of each word
    function getWordScore(word) {
        let wordScore = 0;
        for (let char of word) {
            wordScore += score[char.charCodeAt(0) - 97];
        }
        return wordScore;
    }

    let wordScores = words.map(getWordScore);

    // Step 3: Generate all possible combinations of words
    let maxScore = 0;
    let totalCombinations = 1 << words.length; // 2^words.length

    for (let i = 0; i < totalCombinations; i++) {
        let currentCombinationScore = 0;
        let currentLetterCount = [...letterCount];
        let isValidCombination = true;

        for (let j = 0; j < words.length; j++) {
            if (i & (1 << j)) {
                for (let char of words[j]) {
                    let charIndex = char.charCodeAt(0) - 97;
                    if (currentLetterCount[charIndex] > 0) {
                        currentLetterCount[charIndex]--;
                    } else {
                        isValidCombination = false;
                        break;
                    }
                }
                if (!isValidCombination) break;
                currentCombinationScore += wordScores[j];
            }
        }

        if (isValidCombination) {
            maxScore = Math.max(maxScore, currentCombinationScore);
        }
    }

    return maxScore;
};
