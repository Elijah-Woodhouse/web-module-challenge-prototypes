// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age`
    from arguments.
    - All instances of Person should initialize with an empty `stomach`
    array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some
        type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach`
        array.
        + The `eat` method should have no effect if there are 10
        items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`.
        Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.toString = function(){
    return `${this.name}, ${this.age}`
  }
}

Person.prototype.eat = function(item){
  if (this.stomach.length < 10){
    this.stomach.push(item);
  } else {
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

const person1 = new Person("Winona", 55);
console.log(person1.toString());
person1.eat("brownie");
person1.eat("thai food");
console.log(person1.stomach);
person1.poop();
console.log(person1.stomach);


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank += gallons;
}

Car.prototype.drive = function(distance){
  var counter = 0;
  for (let i = 0; i < distance; i++){
    counter += 1;
    this.odometer += 1;
    if (counter === this.milesPerGallon){
      counter = 0;
      this.tank = this.tank - 1;
    }
    if (this.tank === 0){
      return `I ran out of gas at ${this.odometer} miles!`
    }
  }
}

const car1 = new Car("Honda", 30);
const car2 = new Car("Toyota", 15);
car2.fill(25);
console.log(car2.drive(500));
console.log(car2);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

const baby1 = new Baby("Tom", 4, "RC car");
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}
Baby.prototype.eat = Person.prototype.eat;
Baby.prototype.poop = Person.prototype.poop;
/*
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Default binding: "this" basically refers to the object itself. If the object is in the
  global scope then "this" will refer to that global object.
  2. implicit binding:  whatever is to the left of the dot is "this".
  3. explicit binding: when you're instantiating an object usually using a function then
  this is explicitely defined as the object which you just called.
  you'd normall use call, apply and bind for explicit binding
  4. New Binding: This is when you're creating an object specifically using the
  "this" keyword as a key for attributes of an object.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby,
}
