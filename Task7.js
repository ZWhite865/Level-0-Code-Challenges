function celsiusToFahrenheit(celcius)
{
var fahernheit=(celcius*1.8)+32;
return console.log("It is " +fahernheit.toFixed(2)+" fahrenheit");

}
 celsiusToFahrenheit(109.103);

function fahernheitToCelcius(fahren)
{
    var cel=((fahren-32)/1.8);
    return console.log("It is " +cel.toFixed(2) +"celcius");
}
fahernheitToCelcius(97);