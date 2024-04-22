

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const deadSet = new Set(deadends);
    const visited = new Set();
    const queue = ["0000"];
    let level = 0;
    
    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const current = queue.shift();
            
            if (deadSet.has(current)) continue;
            if (current === target) return level;
            
            for (let j = 0; j < 4; j++) {
                for (let k = -1; k <= 1; k += 2) {
                    const next = current.slice(0, j) + ((Number(current.charAt(j)) + k + 10) % 10) + current.slice(j + 1);
                    
                    if (!visited.has(next)) {
                        visited.add(next);
                        queue.push(next);
                    }
                }
            }
        }
        
        level++;
    }
    
    return -1;
};
