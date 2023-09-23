// This function is an initializer
let CitizenV1 = function(name, country){
  // "this" is an implicit reference to the calling context of the function
  this.name = name;
  this.country = country;
};

CitizenV1.prototype = {
  // 1) Override any prototypical methods up the inheritance chain;
  // 2) Be inherited by any objects derived from Citizen.
  logDetails: function(){
    console.log(`CitizenV1 ${this.name} from ${this.country}`);
  }
};

let c = new CitizenV1('Groucho M.', 'Freedonia');
c.logDetails();
// CitizenV1 Groucho M. from Freedonia

// syntactic sugar allowing classes to be declared
class CitizenV2 {
  constructor(name, country){
    this.name = name;
    this.country = country;
  }

  logDetails(){
    console.log(`CitizenV2 ${this.name} from ${this.country}`);
  }
}

const c2 = new CitizenV2('Groucho M.', 'Freedonia');
c2.logDetails();
// CitizenV2 Groucho M. from Freedonia

// Change the reference for the "this" keyword using the "call" method.
// "this" refers to the object calling the method.
let groucho = new CitizenV1('Groucho M.', 'Freedonia');
let harpo = new CitizenV1('Harpo M.', 'Freedonia');
groucho.logDetails.call(harpo);
// Citizen Harpo M. from Freedonia

// Since ECMAScript 5, Object.create method is 
// a better way to create objects anCitizen is now an object rather than a constructor functiond to implement inheritance.
// This usage is recommended:
let Citizen = {
  setCitizen: function(name, country){
    this.name = name;
    this.country = country;
    return this;
  },
  logDetails: function(){
    console.log('Citizen ' + this.name + ' from ' + this.country);
  }
};
// Citizen is now an object rather than a constructor function.

let Winner = Object.create(Citizen);

Winner.setWinner = function(name, country, category, year){
  this.setCitizen(name, country);
  this.category = category;
  this.year = year;
  return this;
};

Winner.logDetails = function(){
  console.log(
    'Nobel winner ' + this.name + ' from ' + this.country + 
    ', category ' + this.category + ', year ' + this.year
  );
};

let albert = Object.create(Winner)
.setWinner('Albert Einstein', 'Germany and Switzerland', 'Physics', 1921);

albert.logDetails();
// Nobel winner Albert Einstein from Germany and Switzerland, category Physics, year 1921