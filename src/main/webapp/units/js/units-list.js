
var unitList = ["ALGORITHMS",
    "DISCRETE MATHEMATICS",
    "DATABASES"];

var one = 1;
var two = 2;

console.log(one + two)

var unitListTable = "<table border=\"1\">";

for (let index = 0; index < unitList.length; index++)
    unitListTable +=  "<tr><td>" + unitList[index] + "<td></tr>";

unitListTable += "</table>";

console.log(unitListTable);

document.getElementById("table").innerHTML = unitListTable;