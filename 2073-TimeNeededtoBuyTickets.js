/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    const n = tickets.length;
    let totalTime = 0;
    let remainingTickets = [...tickets]; // Create a copy of tickets array
    
    while (true) {
        let personFinished = false;
        for (let i = 0; i < n; i++) {
            if (remainingTickets[i] > 0) {
                // Buy one ticket for the current person
                remainingTickets[i]--;
                totalTime++;
                if (i === k && remainingTickets[i] === 0) {
                    // If it's the person at position k and all tickets are bought
                    personFinished = true;
                    break;
                }
            }
        }
        if (personFinished) break; // Exit loop if person at position k is finished
    }
    
    return totalTime;
};

