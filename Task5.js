function triangleArea(length1,length2,length3)
{

    //calculating the semi-perimeter
    var s=0.5*(length1+length2+length3);
    //Calaculating Area

    var area=Math.sqrt(s*((s-length1)*(s-length2)*(s-length3)));
    return console.log("The areas is "+area.toFixed(2)+" units²");
   
    
}
triangleArea(10,10,10);