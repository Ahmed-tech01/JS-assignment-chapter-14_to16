var QuestionSeven;
document.write("<h1>QuestionFifteen:</h1 >");

document.write("<h2>Phone MenuFacturers</h2>");
document.write("<select>");

var phoneMenuFacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Infinix",
  "Sony",
];

if (phoneMenuFacturers.length > 0) {
  document.write("<option>" + phoneMenuFacturers[0] + "</option>");
}
if (phoneMenuFacturers.length > 1) {
  document.write("<option>" + phoneMenuFacturers[1] + "</option>");
}
if (phoneMenuFacturers.length > 2) {
  document.write("<option>" + phoneMenuFacturers[2] + "</option>");
}
if (phoneMenuFacturers.length > 3) {
  document.write("<option>" + phoneMenuFacturers[3] + "</option>");
}
if (phoneMenuFacturers.length > 4) {
  document.write("<option>" + phoneMenuFacturers[4] + "</option>");
}
if (phoneMenuFacturers.length > 5) {
  document.write("<option>" + phoneMenuFacturers[5] + "</option>");
}

document.write("</select>");
