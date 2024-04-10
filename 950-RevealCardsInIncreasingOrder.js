/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    // Sort the deck in ascending order
    deck.sort((a, b) => a - b);
    
    // Initialize a deque to store indices
    const indices = [];
    for (let i = 0; i < deck.length; i++) {
        indices.push(i);
    }
    
    // Initialize the result array
    const result = new Array(deck.length).fill(0);
    
    // Iterate through the deck
    for (const card of deck) {
        // Assign the current card to the index at the front of the deque
        result[indices.shift()] = card;
        // Move the index at the front to the back
        if (indices.length > 1) {
            indices.push(indices.shift());
        }
    }
    
    return result;
};

