// General Assembly, WDI (Web Development Immersive) Remote, Cohort 06
// Copyright (C) 2017 Christine Yi under the GNU General Public License.
// See LICENSE for details.

/*jslint node: true */
/*jshint esversion: 6 */
/*global describe, it*/
"use strict";

// require chai expect
const expect = require('chai').expect;

// HW Responses
const one = require('../homework.js').one;
const two = require('../homework.js').two;
const three = require('../homework.js').three;
const four = require('../homework.js').four;
const five = require('../homework.js').five;
const six = require('../homework.js').six;
const seven = require('../homework.js').seven;
const eight = require('../homework.js').eight;
const nine = require('../homework.js').nine;
const ten = require('../homework.js').ten;
const eleven = require('../homework.js').eleven;
const twelve = require('../homework.js').twelve;
const thirteen = require('../homework.js').thirteen;
const calc = require('../homework.js').calc;
const solarSystem = require('../homework.js').solarSystem;


// Tests
describe('Solar System Tests', function(){
  it('(1.) jupiterMoons is an array of Jupiter\'s moons', function(){
    expect(one).to.deep.equal(["Europa", "Ganymede", "Io", "Callisto"]);
  });
  it('(2.) neptuneMoon is set to "Nereid"', function(){
    expect(two).to.equal("Nereid");
  });
  it('(3a.) "Endor" has been added to the solar system', function(){
    expect(solarSystem[1].moons[0]).to.equal("Endor");
  });
  it('(3b.) venusMoon is set to "Endor"', function(){
    expect(three).to.equal("Endor");
  });
  it('(4.) plutoMoonCount is equal to 5', function(){
    expect(four).to.equal(5);
  });
  it('(5.) Uranus\'s "Umbriel" moon is now "Oberon"', function(){
    expect(solarSystem[6].moons[3]).to.equal("Oberon");
  });
  it('(6.) Earth object\'s diameter is equal to 7917.5', function(){
    expect(solarSystem[2].diameter).to.equal(7917.5);
  });
  it('(7.) Mercury\'s ringSystem is equal to true', function(){
    expect(solarSystem[0].ringSystem).to.equal(true);
  });
  it('(8.) newSolarSystem should have only 8 objects', function(){
    expect(five.length).to.equal(8);
  });
  it('(9.) totalMoons should equal 18', function(){
    expect(nine).to.equal(18);
  });
  it('(10.) allPlanets should be an array of 8 planet names', function(){
    expect(ten).to.deep.equal(['Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune' ]);
  });

  it('(11.) ringPlanets should be an array of 5 planet names', function(){
    expect(eleven).to.deep.equal([ 'Mercury', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ]);
  });

  it('(12a.) oddMoons should be an array of 7 planet names', function(){
    expect(twelve).to.deep.equal([ 'Endor', 'Titan', 'Enceladus', 'Mimas', 'Miranda', 'Titania', 'Ariel']);
  });

  it('(12b.) evenMoons should be an array of 11 planet names', function(){
    expect(thirteen).to.deep.equal([ 'Moon', 'Phobos', 'Deimos', 'Europa', 'Ganymede', 'Io', 'Callisto', 'Rhea', 'Oberon', 'Triton', 'Nereid' ]);
  });
});

//Reach Goal Test
describe('Reach Goal Tests', function(){
  it('calc(2, -4, "add") should return -2', function(){
    expect(calc(2, -4, "add")).to.equal(-2);
  });
  it('calc(12, 1, "sub") should return 11', function(){
    expect(calc(12, 1, "sub")).to.equal(11);
  });
  it('calc(0, 5, "mul") should return 0', function(){
    expect(calc(0, 5, "mul")).to.equal(0);
  });
  it('calc(10, 2, "div") should return 5', function(){
    expect(calc(10, 2, "div")).to.equal(5);
  });
  it('calc(10, 2, "exp") should return 100', function(){
    expect(calc(10, 2, "exp")).to.equal(100);
  });
});
