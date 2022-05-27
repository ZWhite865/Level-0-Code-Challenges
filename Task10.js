let common="";let finalCommon='';
function commonCharacters(string1,string2)
{
 let arrayStr1=string1.split('');  
 let arrayStr2=string2.split(''); 

if(string1.length>string2.length)
{
    while(arrayStr1.length>0)
    {
     const character=arrayStr1.pop() ;
       if(arrayStr2.includes(character))
       {
         common+=character;
       }
   
    }
}
else if(string2.length>string1.length)
{
    while(arrayStr2.length>0)
    {
     const character=arrayStr2.pop() ;
       if(arrayStr1.includes(character))
       {
         common+=character;
   
       }
    }
}

else if(string1.length===string2.length)
{
    while(arrayStr2.length>0)
    {
     const character=arrayStr2.pop() ;
       if(arrayStr1.includes(character))
       {
         common+=character;
   
       }
   
    }

    
}
//let arr=
for (let j=0;j<common.length;j++)
{
    if(common.includes(common.charAt(j))==false)
    {
        finalCommon=common.charAt(j)+finalCommon;
    }
    console.log(finalCommon);
}




return console.log(common)


}

commonCharacters("hello","jelly");

//console.log(finalCommon);






