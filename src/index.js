module.exports = function makeExchange(currency) {
    var amount = [50, 25, 10, 5, 1];
    var amountValue = ['H','Q','D','N','P'];
    var count = [0, 0, 0, 0, 0];
    var i = 0;
    var result = {};

    if (currency == 0) {
        return {};
    } else if (currency > 10000) {
        return {"error": "You are rich, my friend! We don't have so much coins for exchange"};
    }

    while(currency > 0) {
        if (currency >= amount[i]) {
            currency -= amount[i];
            count[i]++;
        } else {
            i++;
        }

        if (i == count.length) {
            i = 0;
        }
    }

    for (var j = 0; j < count.length; j++) {
        if (count[j] > 0) {
            result[amountValue[j]] = count[j];
        }
    }

    return result;
}
