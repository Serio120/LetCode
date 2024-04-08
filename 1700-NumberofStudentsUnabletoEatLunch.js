/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let unableToEat = 0;
    
    while (students.length > 0) {
        if (students[0] === sandwiches[0]) {
            // If the student at the front prefers the top sandwich, they take it
            students.shift();
            sandwiches.shift();
            unableToEat = 0; // Reset the unableToEat counter
        } else {
            // If the student at the front does not prefer the top sandwich,
            // move them to the end of the queue
            students.push(students.shift());
            unableToEat++;
            
            // If all students in the queue have been moved to the end without eating,
            // it means the remaining sandwiches cannot be eaten by any student
            if (unableToEat === students.length) {
                break;
            }
        }
    }
    
    return students.length;
};

