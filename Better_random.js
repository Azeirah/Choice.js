var Random = (function () {
    // This is a better random library for javascript.
    // inspired by the python random library.
    // Note that most functions behave a little differently than the original Python functions.
    // 
    // We have for you:
    // a randint function, takes start and stop.
    // returns an integer equal to or bigger than start, but smaller than stop
    // randint(0, 1500) -> ex outputs: 0, 152, 839, 1499
    // 
    // choice function, takes an array
    // this one returns a random element from a given array
    // choice([1, 2, 3, 4, 5])
    // example outputs:
    // 1
    // 5
    // 4
    // 
    // shuffle function, takes an array
    // this one is a cool one, it returns an array with the elements shuffled around
    // shuffle([1, 2, 3, 4, 5]) -> ex output: [1, 3, 4, 5, 2]
    // 
    // rand function
    // returns a number between 0.0 and 1.0, this is the exact same as calling Math.random
    // 
    // sample function, takes an array and a number of elements
    // returns an array of randomly chosen elements from the original array.
    // sample([1, 2, 3, 4, 5, 6, 7, 8], 3)
    // example outputs:
    // [8, 5, 1]
    // [1, 6, 2]
    // sample([1, 1, 2, 2], 2)
    // example outputs:
    // [1, 1]
    // [1, 2]
    // [2, 1]
    // [2, 2]
    var rand = Math.random;
    var Random = {};

    var rnd_snd = function () {
        // some kind of magic function taken from the internet used in the guassian function
        return (Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
    };

    Random.randint = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    Random.choice = function (array) {
        return array[Random.randint(0, array.length - 1)];
    };

    Random.shuffle = function (array) {
        var index = array.length;
        var temp;
        var randomIndex;

        while (0 !== index) {
            randomIndex = Math.floor(Random.randint(0, index));
            index -= 1;

            temp = array[index];
            array[index] = array[randomIndex];
            array[randomIndex] = temp;
        }

        return array;
    };

    Random.sample = function (array, k) {
        var sampled = new Array(k);
        var choice;
        var tempArray = array;
        var i;
        for (i = 0; i < k; i++) {
            choice = Random.choice(tempArray);
            tempArray.splice(tempArray.indexOf(choice), 1);
            sampled[i] = choice;
        }
        return sampled;
    };

    Random.gaussian = function (mean, standard_deviation) {
        return Math.round(rnd_snd()*standard_deviation + mean);
    };

    Random.rand = rand;

    return Random;
}());