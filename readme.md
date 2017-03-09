---
title: Solar System
type: homework
competencies: JS basics
creator:
    cohort: WDI-Meeseeks
    adapted by: Christine Yi for WDIR
---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Solar System

![image]()

## Exercise Objectives
* Gain practice accessing and manipulating elements in arrays and objects.
* Gain experience with Git: add and commit your code frequently.
* Introduce automated tests to test your code.
* Gain valuable debugging skills when tests fail.
* Write your first bug report.

## Setup

`cd` into today's homework directory, and run `npm install` in terminal -- this will download any assignment-specific JavaScript dependencies into to a directory called `node_modules`.


## Tests Setup

There are automated tests built into this assignment so that you can check your work. You can run these tests by running `npm test` in terminal in the `homework` directory. Ideally, you should run the tests after each problem. You will have to scroll up to see the summary.

Because tests are provided for you, do not change the variable names. Here is an example of completing the first problem and running `npm test`:

![image](https://i.imgur.com/wQgmE2x.png)

Here is an example of all tests passing:

![image](https://i.imgur.com/VLT9b1i.png)


## Instructions

- Follow the prompts below. Given the `solarSystem` data structure...
- Write your javascript code in `homework.js`.
- Open up a new tab in terminal (`ctrl` + `t`). Run `npm test` to check each solution.
- When you're ready to submit, you will take a screen shot of your tests (like above) and submit that along with the normal homework submission format.

**Remember,** we are not "hard coding" values to the variables. Use your knowledge to access and change the data. Refer to the class notes if you need to. If the tests pass, but you have hard-coded the values, you won't receive credit for the problem.

**Top Tip!** If your tests aren't passing, use your debugging skills to check for: syntax, data type (ie. does it ask for an integer or a string?), console log your variables, console log the data type with `typeof`, pseudocode, etc. Remember, you can run your code in terminal with `node homework.js`.


```
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
```

#### Example Problem
* Set `marsMoons` to the array of Mars's moons.
* `var marsMoons = solarSystem[3].moons;`


#### Prompt #1
* Set `jupiterMoons` to the array of Jupiter's moons.
* :dart: Commit -m "Problem 1 passed"

#### Prompt #2
* Set `neptuneMoon` to Neptune's moon "Nereid".
* :dart: Commit -m "Problem 2 passed"

#### Prompt #3
* Add a new moon called "Endor" to Venus's moons array. Save this moon in `venusMoon`.
* :dart: Commit -m "Problem 3 passed"

#### Prompt #4
* Set `plutoMoonCount` to the total number of Pluto's moons.
* :dart: Commit -m "Problem 4 passed"

#### Prompt #5
* Change Uranus' moon "Umbriel" to "Oberon".
* :dart: Commit -m "Problem 5 passed"

#### Prompt #6
* Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter (hint: it's 7917.5 miles) as a number.
* :dart: Commit -m "Problem 6 passed"

#### Prompt #7
* Whoops! There's an error in our array. Change Mercury's ringSystem boolean to true.
* :dart: Commit -m "Problem 7 passed"

#### Prompt #8
* Pluto was considered a planet in our solar system from 1930 - 2006. Bye, Pluto we miss you! :( Remove the Pluto object from `solarSystem` and save the new solarSystem to the `newSolarSystem` variable.
* :dart: Commit -m "Problem 8 passed"

#### Prompt #9
* Using a for loop, calculate the total number of moons in the `newSolarSystem` and save that number in the `totalMoons` variable.
* :dart: Commit -m "Problem 9 passed"

#### Prompt #10
* Using a `while` loop, iterate through `newSolarSystem` and push all of the objects' name values into an array. Assign the array to the `allPlanets` variable.

```
  // Expected output for allPlanets:
  [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ]
```

* :dart: Commit -m "Problem 10 passed"

#### Prompt #11
* Write a `while` loop with an if/else statement so that only the objects with a ringSystem (where ringSystem: true) name values gets pushed into an array. Assign the array to the `ringPlanets` variable.

```
  // Expected output for ringPlanets:
  [ 'Mercury', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ]
```

* :dart: Commit -m "Problem 11 passed"

#### Prompt #12
* This one's a little tricky. Write a loop (your choice) that iterates through `newSolarSystem` so that only moon names that are an even amount of letters long get stored as an array, saved in the `evenMoons` variable **AND** the moon names that are odd-numbered in length get stored as an array in `oddMoons`.

```
  // Expected output for oddMoons:
  [ 'Endor', 'Titan', 'Enceladus', 'Mimas', 'Miranda', 'Titania', 'Ariel']

  //Expected output for evenMoons:
  [ 'Moon', 'Phobos', 'Deimos', 'Europa', 'Ganymede', 'Io', 'Callisto', 'Rhea', 'Triton', 'Nereid' ]
```

* :dart: Commit -m "Problem 12 passed"

## Reach Goal

You've already written Javascript functions in Fundamentals, and tomorrow we are going to review Javascript functions. Have a stab at this problem! There are tests provided for this as well.

In `homework.js`, a `calc` function has been created. Build the function so that:
  * the function takes 3 parameters: num1, num, and operation (in that order)
  * if the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2
  * "sub" will return the difference between num1 and num2.
  * "mul" will return the product
  * "div" will return the quotient
  * "exp" will return num1 to the power of num2
  * :dart: Commit -m "YAAAS! Reach Goal passed"

## Submitting Your Work

  When you're ready, create an issue on the class repo with
  a title in the format "First and Last Name -- Week XX Day XX".
  The issue body should have:

  *   A link to your forked repo (ie. to your `homework` folder)
  *   A 'comfort' score on how you feel about your answers, from 1 (very
      uncomfortable) to 5 (very comfortable)
  *   A 'completeness' score, from 1 (didn't do it) to 5 (finished all of it)    
  *   A 'win'
  *   A 'struggle'
  *   A 'comment'
  *   A screen shot of your tests (like above).
