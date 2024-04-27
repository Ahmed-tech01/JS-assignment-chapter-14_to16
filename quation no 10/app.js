var QuestionTwo;
document.write("<h1>QuestionTen:</h1 >");

var studentMarks = [
  "<h3>",
  100,
  150,
  200,
  250,
  300,
  350,
  400,
  450,
  500,
  "</h3>",
];
document.write("<h2>These are the total Students Marks</h2>", studentMarks);

studentMarks.sort(function (a, b) {
  return a - b;
});

var userMarks = parseInt(
  prompt("Enter a score to find its position in the sorted array: ")
);

var index = studentMarks.indexOf(userMarks);
if (index > -1) {
  alert(
    "The marks of " +
      userMarks +
      "is at position" +
      (index + 1) +
      "in the sorted arrary."
  );
} else {
  alert("The marks of " + userMarks + "is not in the sorted arrary");
}
