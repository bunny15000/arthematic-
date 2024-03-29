var add =function(a, b) {
    //if ((a | 0) == 0 && (b | 0) == 0) {
    //    return '0';
    // }

    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];
    var carry = 0;

    for (var i = 0; (a[i] >= 0) || (b[i] >= 0); i++) {
        var sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

         carry = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (carry) {
            result[i + 1] = carry;
        }
    }

    return result.reverse().join('');
};

module.exports ={
    add : add
};

 console.log(add("2412","54"));

