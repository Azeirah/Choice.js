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
randint(0, 1500) -> ex outputs: 0, 152, 839, 1499

**choice** function, takes an array
this one returns a random element from a given array
choice([1, 2, 3, 4, 5])
example outputs:
1
5
4

**shuffle** function, takes an array
this one is a cool one, it returns an array with the elements shuffled around
shuffle([1, 2, 3, 4, 5]) -> ex output: [1, 3, 4, 5, 2]

**rand** function
returns a number between 0.0 and 1.0, this is the exact same as calling Math.random

**sample** function, takes an array and a number of elements, returns an array of randomly chosen elements from the original array.
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