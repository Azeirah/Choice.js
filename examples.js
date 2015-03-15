console.log("A random float: " + Choice.rand());
console.log("A random integer between 0 and 50: " + Choice.randint(0, 50));
console.log("A choice from the list [1, 2, 3]: " + Choice.choice([1, 2, 3]));
console.log("The list [1, 2, 3, 4, 5] shuffled: " + Choice.shuffle([1, 2, 3, 4, 5]));
console.log("A list with 4 random elements from [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]: " + Choice.sample([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10], 4));
console.log("10 gaussian random numbers with a mean of 100 and a standard deviation of 20: " + function () {
    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = Choice.gaussian(100, 20);
    }
    return a;
}());
console.log("Using seeded random, seed is 10");
Choice.setSeed(10);
var firstSeeded = Choice.rand();
console.log("First random: " + firstSeeded);
console.log("Setting seed to 10 again, resetting the Random Number Generator");
Choice.setSeed(10);
var secondSeeded = Choice.rand();
console.log("Second random: " + secondSeeded);
if (firstSeeded === secondSeeded) {
    console.log("Seeded randomness works as expected");
} else {
    console.log("Seeded randomness is broken :(");
}
