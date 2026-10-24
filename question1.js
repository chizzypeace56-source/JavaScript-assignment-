
 // QUESTION 1: STUDENT GRADING SYSTEM

let firstName = "Chinaza";
let lastName = "Peace";

let subject1 = 25;
let subject2 = 30;
let subject3 = 20;

// Calculate total score
let totalScore = subject1 + subject2 + subject3;

// Determine the student's remark
let remark;

if (totalScore >= 70) {
    remark = "Excellent";
} else if (totalScore >= 50 && totalScore <= 69) {
    remark = "Good";
} else if (totalScore >= 35 && totalScore <= 49) {
    remark = "You can do better";
} else {
    remark = "Fail";
}

// Display examination result
console.log("STUDENT EXAMINATION RESULT");
console.log("Full Name: " + firstName + " " + lastName);
console.log("Subject 1: " + subject1);
console.log("Subject 2: " + subject2);
console.log("Subject 3: " + subject3);
console.log("Total Score: " + totalScore);
console.log("Remark: " + remark);
 
    