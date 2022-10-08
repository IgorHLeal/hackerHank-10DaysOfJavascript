function getGrade(score) {
  let grade;
  // Write your code here
  if (25 < score && score <= 30) console.log(grade = 'A');
  if (20 < score && score <= 25) console.log(grade = 'B');
  if (15 < score && score <= 20) console.log(grade = 'C');
  if (10 < score && score <= 15) console.log(grade = 'D');
  if (5 < score && score <= 10) console.log(grade = 'E');
  if (0 < score && score <= 5) console.log(grade = 'F');
  return grade;
}

getGrade(25)