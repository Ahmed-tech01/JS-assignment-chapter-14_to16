var QuestionOne;
document.write("<h1>QuestionNine</h1 > ");

var colors = ["<h3>red", "blue", "green", "yellow</h3>"];
document.write("<h2>Initial Arrary:</h2>", colors);

var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
document.write("<h2>Arrary after adding color to the beginning:</h2>", colors);

var colorToAddInTheEnd = prompt("Enter a color to add in the End:");
colors.push(colorToAddInTheEnd);
document.write("<h2>Arrary after adding color to the end:", colors);

colors.unshift("purple", "orange");
document.write(
  "<h2>Arrary after adding two more color to the beginning:</h2>",
  colors
);

colors.shift();
document.write("<h2>Arrart after deleting the first color:</h2>", colors);

colors.pop();
document.writeln("<h2>Arrary after deleting the last color:</h2>", colors);

var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorNameToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorNameToAdd);

document.write("<h2>Array after adding color at index</h2>", colors);

var indexToDelete = parseInt(prompt("Enter the index to delete colors:"));
var numberOfColorsToDelete = parseInt(
  prompt("Enter the number of colors to delete")
);
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h2>Array after deleting colors at index:</h2>", colors);
