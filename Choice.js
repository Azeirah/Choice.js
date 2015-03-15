var Choice = (function () {
    "use strict";
    var rand   = Math.random;
    var Choice = {};

    var rnd_snd = function () {
        return (rand() * 2 - 1) + (rand() * 2 - 1) + (rand() * 2 - 1);
    };

    var sum = function (arr) {
        var total = 0;

        arr.forEach(function (el) {
            total += el;
        });

        return total;
    };

    Choice.randint = function (min, max) {
        return Math.floor(rand() * (max - min + 1)) + min;
    };

    Choice.choice = function (array) {
        return array[Choice.randint(0, array.length - 1)];
    };

    Choice.shuffle = function (array) {
        // uses the fisher yates shuffle
        var i;
        var arr = array.slice();
        var swapIndex;
        var buff;

        for (i = 0; i < arr.length; i += 1) {
            swapIndex      = Choice.randint(i, arr.length - 1);
            buff           = arr[i];
            arr[i]         = arr[swapIndex];
            arr[swapIndex] = buff;
        }

        return arr;
    };

    Choice.chance = function (percentage, optional) {
        if (!optional) {
            return rand() < (percentage / 100);
        }

        if (Choice.chance(percentage)) {
            return optional[0];
        }

        return optional[1];
    };

    Choice.probabilities = function (probabilities, items) {
        var diceRoll       = Choice.randint(0, 100);
        var probabilitySum = sum(probabilities);
        var i;

        if (probabilities.length !== items.length) {
            throw new Error("Probabilities length is not equal to items' length");
        }

        if (probabilitySum !== 100) {
            throw new Error("Sum of probability percentages does not equal 100%. Sum is: " + probabilitySum);
        }

        for (i = 0; i < probabilities.length; i += 1) {
            diceRoll -= probabilities[i];
            if (diceRoll <= 0) {
                return items[i];
            }
        }
    };

    Choice.sample = function (array, amount) {
        var sampled   = new Array(amount);
        var tempArray = array;
        var choice;
        var i;

        for (i = 0; i < amount; i += 1) {
            choice = Choice.choice(tempArray);
            tempArray.splice(tempArray.indexOf(choice), 1);
            sampled[i] = choice;
        }

        return sampled;
    };

    Choice.gaussian = function (mean, standard_deviation) {
        return rnd_snd() * standard_deviation + mean;
    };

    Choice.setSeed = function (seed) {
        function randomStream(seed) {
            var x;
            var y;
            var z;

            if (!seed || isNaN(seed) || typeof seed !== "number") {
                throw new Error("Seed '" + seed + "' with type '" + typeof seed + "' is invalid");
            }

            x    = (seed % 30268) + 1;
            seed = (seed - (seed % 30268)) / 30268;
            y    = (seed % 30306) + 1;
            seed = (seed - (seed % 30306)) / 30306;
            z    = (seed % 30322) + 1;
            seed = (seed - (seed % 30322)) / 30322;

            return function random() {
                x = (171 * x) % 30269;
                y = (172 * y) % 30307;
                z = (170 * z) % 30323;
                return (x / 30269.0 + y / 30307.0 + z / 30323.0) % 1.0;
            };
        }

        rand        = randomStream(seed);
        Choice.rand = rand;
    };

    Choice.rand = rand;

    return Choice;
}());
