jsRandom
========

Better random library for javascript

This is a random for javascript library heavily inspired by the Python random module.
Note that the functions might behave a little different from the Python random library functions, and not all of them are included.

functions
---------

We have for you:
a **randint** function, takes start and stop.

returns an integer equal to or bigger than start, but smaller than stop
```
randint(0, 1500) -> ex outputs: 0, 152, 839, 1499
```

**choice** function, takes an array
this one returns a random element from a given array
```choice([1, 2, 3, 4, 5])
example outputs:
1
5
4```

**shuffle** function, takes an array
this one is a cool one, it returns an array with the elements shuffled around
```
shuffle([1, 2, 3, 4, 5]) -> ex output: [1, 3, 4, 5, 2]
```

**rand** function
returns a number between 0.0 and 1.0, this is the exact same as calling Math.random

**sample** function, takes an array and a number of elements, returns an array of randomly chosen elements from the original array.
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

**gaussian** function, takes a mean and a standard deviation. Returns a guassian random number.
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

**chance** function, takes a percentage. Returns true or false based on that percentage.
Takes a second optional argument, an array of two items.
If the chance is true, it returns the first item out of the array. Otherwise it will return the second.
```
chance(25); // has a 25% chance to return true
chance(70); // has a 70% chance to return true
chance(12, [1, 2]); // has a 12% chance to return 1 and an 88% chance to return 2
```

**probabilities** function, takes two arrays of equal length. The first one is a set of probabilities adding up to 100%. The second one is a list of items. Each probability corresponds to an item. Example `Random.probabilities([2, 98], ["first item", "second item"])` has a 2% chance to return `"first item"` and a far higher, 98% to return `"second item"`
```
probabilities([25, 25, 25, 25], ["green", "blue", "yellow", "white"]); // note that this is the same as using choice()

// this one has 15% chance to return "I get 500 experience points"
// another 15% chance to return "I get 200 experience points"
// and a far higher 70% to return "I get 50 experience points"
probabilities([15, 15, 70], ["I get 500 experience points", "I get 200 experience points", "I get 50 experience points"]);
probabilities([1, 2, 3], [1]) // fails, the arrays are not equal size and probabilites do not add up to 100

// note that you can also return functions, this is very powerful
probabilities([80, 20], [function () {
    console.log("I appear about 80% of the time! :)");
}, function () {
    console.log("I appear about 20% of the time! :(");
}])();
```