"use strict";

var countries = [
  {country: "Sweden", area: 450295, population: 10402070},
  {country: "Norway", area: 385207, population: 5402171},
  {country: "Finland", area: 338455, population: 5536146},
  {country: "Denmark", area: 42933, population: 5850189},
  {country: "Iceland", area: 102775, population: 371580}
];

for(var i of countries) {

  var country = i.country;
  var area = i.area;
  var population = i.population;
  var areaVienam = area * 1000000 / population;

console.log("Šalis: " + country + ", joje gyvena " + population + " mln. gyventojų.");
console.log("Valstybės plotas: " + area + " km², plotas tenkantis vienam gyventojui: " + areaVienam.toFixed(2) + " m².");
}

var answer = alert("Šalis: " + country + ", joje gyvena " + population + " mln. gyventojų." + "Valstybės plotas: " + area + " km², plotas tenkantis vienam gyventojui: " + areaVienam.toFixed(2) + " m².");
