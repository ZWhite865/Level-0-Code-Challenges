function time(minutes)
{
var remainingMinutes=minutes%60;
var hrs=Math.floor((minutes-remainingMinutes)/60);

if (hrs>1 && remainingMinutes>1||hrs>1 &&remainingMinutes==0||hrs==0&&remainingMinutes==0|| hrs==0 && remainingMinutes>1)
{
    return console.log(hrs+" hours and "+remainingMinutes.toFixed(2)+" minutes");
}
else if (hrs>1&&remainingMinutes===1||hrs==0&&remainingMinutes==1)
{
    return console.log(hrs+" hours and "+remainingMinutes.toFixed(2)+" minute");
}

else if (hrs==1 && remainingMinutes>1||hrs==1 && remainingMinutes==0)
{
    return console.log(hrs+" hour and "+remainingMinutes.toFixed(2)+" minutes");
}
else if (hrs==1 && remainingMinutes===1)
{
    return console.log(hrs+" hour and "+remainingMinutes.toFixed(2)+" minute");
}

}
time(71);