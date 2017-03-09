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
var jupiterMoons;

// Problem 2
var neptuneMoon;

// Problem 3
var venusMoon;

// Problem 4
var plutoMoonCount;

// Problem 5


// Problem 6


// Problem 7


// Problem 8
var newSolarSystem;

// Problem 9

var totalMoons;

// Problem 10
var allPlanets;

// Problem 11
var ringPlanets;

// Problem 12

var oddMoons;
var evenMoons;


// ヽ(ﾟ∀ﾟ)ﾉ REACH Goal ヽ(ﾟ∀ﾟ)ﾉ

var calc = function () {

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
