var QuestionEight;
document.write(
  "<h1>QuestionEight:( Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students )</h1>"
);

var studentNamesTwo = ["Dan", "Jack", "Mark"];
var studentScores = [450, 480, 460];
var totalMarks = 500;
var studentPercentages = [];
for (var i = 0; i < studentNamesTwo.length; i++) {
  studentPercentages[i] = (studentScores[i] / totalMarks) * 100;
}
document.write("<h2>Scores and Percentages of the Students</h2>");
document.write('<table border= "1">');
document.write("<tr><th>Name</th><th>Score</th><th>Percentage</th></tr>");

for (var i = 0; i < studentNamesTwo.length; i++) {
  document.write(
    "<tr><td>" +
      studentNamesTwo[i] +
      "</td><td>" +
      studentScores[i] +
      "</td><td>" +
      studentPercentages[i].toFixed(2) +
      "%</td></tr>"
  );
}
document.write("</table>");
