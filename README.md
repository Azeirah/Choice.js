Choice.js
========

A random library for JavaScript

This is a utility class with several Random functions for javascript library lightly inspired by the Python random module.

Reference
---------

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

## <a name="randint">randint</a>

#### *randint(min, max)*

Takes two integers, returns an integer equal to or larger than *min*, but smaller than *max*

`min >= n < max`

```
randint(0, 1500) -> example outputs: 
0, 152, 839, 1499
but not 1500
```

## <a name="choice">choice</a>

#### *choice(array)*

Takes an array and returns a random element from the array
```
choice([1, 2, 3, 4, 5])
example outputs:
1
5
4
```

## <a name="shuffle">shuffle</a>

#### *shuffle(array)*

Takes an array and returns an array with the elements shuffled around
```
shuffle([1, 2, 3, 4, 5]) -> ex output: [1, 3, 4, 5, 2]
shuffle(["a", "b", "c", "d"]) -> ex output: ["b", "d", "c", "a"]
Note that there's a chance that the array stays the same
```

## <a name="rand">rand</a>

#### *rand()*

returns a number between 0.0 and 1.0, 1.0 not included. This is the exact same as calling Math.random

## <a name="sample">sample</a>

#### *sample(array, amount)*

Takes an array and a number of elements, returns an array of randomly chosen elements from the original array.
```
sample([1, 2, 3, 4, 5, 6, 7, 8], 3)
example outputs:
[8, 5, 1]
[1, 6, 2]
sample([1, 1, 2, 2], 2)
example outputs:
[1, 1]
[1, 2]
[2, 1]
[2, 2]
```

## <a name="gaussian">gaussian</a>

#### *gaussian(mean, standardDeviation)*

Takes a mean and a standard deviation. Returns a guassian random number.
```
guassian(10, 2)
example outputs: (note that with guassian random numbers numbers closer to the mean appear far more often)
9
9
7
12
13
4
```

## <a name="chance">chance</a>

#### *chance(probability, [choices])*

Takes a probability (percentage). Returns true or false based on that probability.
Takes a second optional argument, an array of two items.
If the chance is true, it returns the first item out of the array. Otherwise it will return the second.
```
chance(25); // has a 25% chance to return true
chance(70); // has a 70% chance to return true
chance(12, [1, 2]); // has a 12% chance to return 1 and an 88% chance to return 2
```

## <a name="probabilities">probabilities</a>

#### *probabilities(probabilities, outcomes)*

Takes two arrays of equal length. The first one is a set of probabilities adding up to 100%. The second one is a list of items. Each probability corresponds to an item. `Random.probabilities([2, 98], ["first item", "second item"])` has a 2% chance to return `"first item"` and a far higher, 98% chance to return `"second item"`
```
probabilities([25, 25, 25, 25], ["green", "blue", "yellow", "white"]);
// note that in this case you could also use choice, since the probabilities are equal

// this one has 15% chance to return "I get 500 experience points"
// another 15% chance to return "I get 200 experience points"
// and a far higher 70% to return "I get 50 experience points"
probabilities([15, 15, 70], ["I get 500 experience points", "I get 200 experience points", "I get 50 experience points"]);
probabilities([1, 2, 3], [1]) // fails, the arrays are not equal size and probabilites do not add up to 100

// remember, this is JavaScript, you can place whatever you want in the outcomes array, so functions too
probabilities([80, 20], [function () {
    console.log("I appear about 80% of the time! :)");
}, function () {
    console.log("I appear about 20% of the time! :(");
}])();
```