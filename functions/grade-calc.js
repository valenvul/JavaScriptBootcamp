// garde calculator
// arguments: student score, total possible score
// generate letter grade and percentage
// return: You got a lettergrade (percentage)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalculator = function(studentScore=0, totalScore=100){
    let grade  = (studentScore/totalScore) * 100;
    let letterGrade;
    if(grade > 89){
        letterGrade = 'A';
    } else if (grade > 79){
        letterGrade = 'B';
    } else if (grade > 69){
        letterGrade = 'C';
    } else if (grade > 59){
        letterGrade = 'D';
    } else {
        letterGrade = 'F'
    } 

    return `You got a ${letterGrade} (${grade}%)!`;
}

let grade = gradeCalculator(78, 100);
console.log(grade);