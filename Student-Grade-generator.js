//determining grade based on marks function
function getGrade(marks) {
    if (marks > 79 && marks <= 100) {
        return 'A';
        
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    
    } else if (marks >=49 && marks <= 59) {
        return 'C';
        
    } else if (marks >=40 && marks <= 48) {
        return 'D';
        
    } else if (marks < 40) {
        return 'E';
        
    } else {
        return 'null';
        
    } {
        
    } {
        
    }{
        
    } {
        
    }
    
}
// prompt user for input
let input = prompt("Enter student marks (0, 100):");
//convert input to number
let marks = Number(input);

//validate input and display grade
if (marks==NaN || marks < 0 || marks > 100) {
    console.log("Invalid input.Please input number between(0 , 100):");
    
} else {
    let grade = getGrade(marks);
    console.log(`The grade is:${grade}`);
    
}