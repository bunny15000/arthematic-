var division = function(number, divisor)
{
      if(parseInt(divisor)==0)
      return str = "undefined";

	var  ans = "";
	var i = 0;
    var temp = parseInt(number[i]);

	while (temp < divisor)
    temp = temp * 10 + (parseInt(number[++i]));


	while (number.length > i)
	{
        ans += parseInt(temp / divisor).toString();

     	temp = parseInt((temp % divisor)) * 10 + parseInt(number[++i]);
	}

console.log()
	if (ans.length == 0)
		return "0";

	return ans;
}

module.exports ={
    division :division
};
// console.log(division("25445132647894560","11421378451641"));

