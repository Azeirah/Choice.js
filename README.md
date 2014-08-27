Choice.js
========

A random library for JavaScript

This is a utility library with several Random functions for javascript. It was lightly inspired by the Python random module.

Reference
---------

All functions are namespaced under `Random`, so `randint(0, 5)` is actually `Random.randint(0, 5)`

* [randint(min, max)](#randint)
* [choice(array)](#choice)
* [shuffle(array)](#shuffle)
* [rand()](#rand)
* [sample(array)](#sample)
* [gaussian(mean, standardDeviation)](#gaussian)
* [chance(percentage, [choices])](#chance)
* [probabilities(probabilities, outcomes)](#probabilities)

Documentation
-------------

## randint

#### *randint(min, max)*

Takes two integers, returns an integer equal to or larger than *min*, but smaller than *max*

`min >= n < max`

```javascript
/**
 * Example outputs:
 * 0, 152, 839, 1499
 * but not 1500
 */
randint(0, 1500);
```

## choice

#### *choice(array)*

Takes an array and returns a random element from the array
```javascript
/**
 * Example outputs:
 * 1
 * 3
 * 4
 */
choice([1, 2, 3, 4, 5]);

// choice can take all kinds of types
choice(["a", function () {}, [1, 2, 3], 55]);

```

## shuffle

#### *shuffle(array)*

Takes an array and returns an array with the elements shuffled around
```javascript
shuffle([1, 2, 3, 4, 5]) -> ex output: [1, 3, 4, 5, 2]
shuffle(["a", "b", "c", "d"]) -> ex output: ["b", "d", "c", "a"]
Note that there's a chance that the array stays the same
```

## rand

#### *rand()*

returns a number between 0.0 and 1.0, 1.0 not included. This is the exact same as calling Math.random

## sample

#### *sample(array, amount)*

Takes an array and a number of elements, returns an array of randomly chosen elements from the original array.
```javascript
/**
 * example outputs:
 * [8, 5, 1]
 * [1, 6, 2]
 */
sample([1, 2, 3, 4, 5, 6, 7, 8], 3); // take three random elements from the array

/**
 * example outputs:
 * [1, 1]
 * [1, 2]
 * [2, 1]
 * [2, 2]
 */
sample([1, 1, 2, 2], 2); // take two random elements from the array

```

## gaussian

#### *gaussian(mean, standardDeviation)*

Takes a mean and a standard deviation. Returns a guassian random number.
A Gaussian random number generator generates numbers `mean - standardDeviation * 3 > n < mean + standardDeviation * 3`
with `n` having a higher chance being close to the mean than far away.
Note that gaussian distribution is also known as *normal distribution*

```javascript
/**
 * This one generates numbers between 4 and 16
 * 9 //common
 * 9
 * 7
 * 12
 * 10 // common
 * 13
 * 4 // rare
 */
gaussian(10, 2);

/**
 * Generates numbers between -6 and 6
 * example outputs:
 * 0 // common
 * 2
 * -1
 * -1
 * -6 // rare
 */
gaussian(0, 2);
```

## chance

#### *chance(probability, [choices])*

Takes a probability (percentage). Returns true or false based on that probability.
Takes a second optional argument, an array of two items.
If the chance is true, it returns the first item out of the array. Otherwise it will return the second.
```javascript
chance(25); // has a 25% chance to return true
chance(70); // has a 70% chance to return true
chance(12, [1, 2]); // has a 12% chance to return 1 and an 88% chance to return 2
```

## probabilities

#### *probabilities(probabilities, outcomes)*

Takes two arrays of equal length. The first one is a set of probabilities adding up to 100%. The second one is a list of items. Each probability corresponds to an item. `Random.probabilities([2, 98], ["first item", "second item"])` has a 2% chance to return `"first item"` and a far higher, 98% chance to return `"second item"`
```javascript
// in this case you could also use choice, since the probabilities are equal
probabilities([25, 25, 25, 25], ["green", "blue", "yellow", "white"]);

// this one has 15% chance to return "I get 500 gold"
// another 15% chance to return "I get 200 gold"
// and a far higher 70% to return "I get 50 gold"
probabilities([15, 15, 70], ["I get 500 gold", "I get 200 gold", "I get 50 gold"]);
probabilities([1, 2, 3], [1]) // fails, the arrays are not equal size and probabilites do not add up to 100

// remember, this is JavaScript, you can place whatever you want in the outcomes array, so functions will work just fine
probabilities([80, 20], [function () {
    console.log("I appear about 80% of the time! :)");
}, function () {
    console.log("I appear about 20% of the time! :(");
}])(); // these params () instantly call the chosen function
```