module.exports.sub = function(num1 , num2 ){
    var sign = "+";
    if(parseInt(num2)>parseInt(num1)){
        var t =num1 ;
        num1 = num2;
        num2 =t ;
        sign = "-";
    }
    var res = "";
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    var carry = 0;
    var n1 = num1.length;
    var n2 = num2.length;

    for (var i = 0; i<n2 ;i++){
        var  diff = parseInt(num1[i])-parseInt(num2[i])-carry;
        if (diff<0){
            diff +=10;
            carry = 1;
        }
        else
        carry =0;

        res +=diff.toString();
    }
    for (var i =n2; i<n1;i++){
        var diff = parseInt(num1[i])-carry;

        if (diff<0){
            diff +=10;
            carry = 1;
        }
        else
           carry =0;

        res +=diff.toString();

    }
    return  sign + res.split('').reverse().join('');
}

//console.log(sub("54","253"));







