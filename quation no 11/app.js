var QuestionThree;
document.write("<h1>QuestionEleven:</h1 >");

var cities = ["<h3>Karachi", "Lahour", "Islamabad", "Quetta", "Peshawar</h3>"];

var selectedCities = [];

if (cities.length >= 3) {
  selectedCities = cities.slice(0, 3);
} else {
  selectedCities = cities.slice();
}
document.write(
  "<h2>Selected Cities:</h2>",
  "<ul>",
  selectedCities.join("</li><li>"),
  "</ul>"
);
