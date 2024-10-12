//determining grade based on marks function
function getGrade(marks) {
    if (marks > 79 && marks <= 100) {  // check if marks are  greater 79 and  less or equal to 100
        return 'A';                // return grade A if marks are within this range
        
    } else if (marks >= 60 && marks <= 79) {     // check if marks are  within  60 and 79 inclusive of (60 and 79)
        return 'B';     // return grade B if marks are within this range
    
    } else if (marks >=49 && marks <= 59) {   // check if marks are within 49 and 59 (inclusive)
        return 'C';      // return grade C if marks are within this range
        
    } else if (marks >=40 && marks <= 48) {     // check if marks are within  40 and 48(inclusive)
        return 'D';       // return grade D if marks are within this range
        
    } else if (marks < 40) {    //check if marks are less than 40
        return 'E';      // return grade E for marks less than 40
        
    } else {            //  else if marks dont meet the above coditions return null
        return 'null';    // return null for invalid input
        
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
    console.log("Invalid input.Please input number between(0 , 100):"); // display error  message for invalid input
    
} else {
    let grade = getGrade(marks); // get grade based on marks parameter
    console.log(`The grade is:${grade}`);// ouput the grade
    
}