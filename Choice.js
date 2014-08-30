var Choice = (function () {
    var rand = Math.random;
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
        var arr = array.slice();
        for (var i = 0; i < arr.length; i++) {
            var swapIdx = Choice.randint(i, arr.length - 1);
            var buff = arr[i];
            arr[i] = arr[swapIdx];
            arr[swapIdx] = buff;
        }
        return arr;
    };

    Choice.chance = function (percentage, optional) {
        if (!optional) return rand() < (percentage / 100);
        else {
            if (Choice.chance(percentage)) return optional[0];
            else return optional[1];
        }
    };

    Choice.probabilities = function (probabilities, things) {
        var rand = Choice.randint(0, 100);
        var probabilitySum = sum(probabilities);
        if (probabilities.length !== things.length) throw new Error("Probabilities length is not equal to items' length");
        if (probabilitySum != 100) throw new Error("Sum of probability percentages does not equal 100%. Sum is: " + probabilitySum);

        for (var i = 0; i < probabilities.length; i++) {
            rand -= probabilities[i];
            if (rand <= 0)
                return things[i];
        }
    };

    Choice.sample = function (array, k) {
        var sampled = new Array(k);
        var choice;
        var tempArray = array;
        var i;
        for (i = 0; i < k; i++) {
            choice = Choice.choice(tempArray);
            tempArray.splice(tempArray.indexOf(choice), 1);
            sampled[i] = choice;
        }
        return sampled;
    };

    Choice.gaussian = function (mean, standard_deviation) {
        return Math.round(rnd_snd()*standard_deviation + mean);
    };

    Choice.rand = rand;

    return Choice;
}());