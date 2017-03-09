// =====================================
// Do not modify solarSystem array below
// =====================================

var solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: [] },
    { name: "Earth", ringSystem: false, moons: ["Moon"] },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] },
    { name: "Pluto", ringSystem: false, moons: ["Charon", "Styx", "Nix", "Kerberos", "Hydra"] }
];

// =====================================
// Example Problem
// =====================================
// Ex1. Set `marsMoons` to the array of Jupiter's moons.
var marsMoons = solarSystem[3].moons;

// =====================================
// Write Your Code Below
// =====================================

// Problem 1
var jupiterMoons = solarSystem[4].moons;

// 2. Set `neptuneMoon` to Neptune's moon "Nereid".
var neptuneMoon = solarSystem[7].moons[1];

// 3. Add a new moon called "Endor" to Venus's moons array. Save this moon in `venusMoon`.
solarSystem[1].moons.push("Endor");
var venusMoon = solarSystem[1].moons[0];

// 4. Set `plutoMoonCount` to the total number of Pluto's moons.
var plutoMoonCount = solarSystem[8].moons.length;

// 5. Change Uranus' moon "Umbriel" to "Oberon".

solarSystem[6].moons[3] = "Oberon";

// 6. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter (hint: it's 7917 miles).

solarSystem[2].diameter = 7917.5;

// 7. Whoops! There's an error in our array. Change Mercury's ringSystem boolean to true.

solarSystem[0].ringSystem = true;

// 8. Pluto was considered a planet in our solar system from 1930 - 2006. Bye, Pluto we miss you! :( Remove the Pluto object from `solarSystem` and save the solarSystem to the `newSolarSystem` variable.

solarSystem.pop();
var newSolarSystem = solarSystem;

// 9. Using a for loop, calculate the total number of moons in the `newSolarSystem` and save that number in the `totalMoons` variable.

var totalMoons = 0;

for (var i = 0; i < newSolarSystem.length; i++){
  totalMoons += newSolarSystem[i].moons.length;
}

//10. Using a `while` loop, iterate through `newSolarSystem` and push all of the objects' name values into an array, saved in the `allPlanets` variable.
var allPlanets = [];

var i = 0;

while (i < newSolarSystem.length) {
	allPlanets.push(newSolarSystem[i].name);
	i++;
}

// 11. Write a `while` loop with an if/else statement so that only the objects with a ringSystem (where ringSystem: true) names gets pushed into an array, saved in the `ringPlanets` variable.
var ringPlanets = [];

var i = 0;

while (i < newSolarSystem.length) {
	if (solarSystem[i].ringSystem === true) {
  	ringPlanets.push(newSolarSystem[i].name);
  }
	i++;
}

// 12. Write a loop (your choice) that iterates through `newSolarSystem` so that only moon names that are an even amount of letters long get stored as an array, saved in the `evenMoons` variable **AND** the moon names that are odd-numbered in length get stored as an array in `oddMoons`.

var oddMoons = [];
var evenMoons = [];

for (var i = 0; i < newSolarSystem.length; i++){
  for (var j = 0; j < newSolarSystem[i].moons.length; j++){
    if (newSolarSystem[i].moons[j].length % 2 === 0){
      evenMoons.push(newSolarSystem[i].moons[j]);
    } else {
      oddMoons.push(newSolarSystem[i].moons[j]);
    }
  }
}

// REACH Goal

var calc = function(num1, num2, operation){
  if (operation === "add") {
		return num1 + num2;
	} else if (operation === "sub") {
		return num1 - num2;
	} else if (operation === "mul") {
		return num1 * num2;
	} else if (operation === "div") {
		return num1/num2;
	} else if (operation === "exp") {
		return Math.pow(num1, num2);
	}
};

// =====================================
// Do not edit below this line
// =====================================

module.exports = {
  one: jupiterMoons,
  two: neptuneMoon,
  three: venusMoon,
  four: plutoMoonCount,
  five: newSolarSystem,
  nine: totalMoons,
  ten: allPlanets,
  eleven: ringPlanets,
  twelve: oddMoons,
  thirteen: evenMoons,
  calc: calc,
  solarSystem: solarSystem
};
