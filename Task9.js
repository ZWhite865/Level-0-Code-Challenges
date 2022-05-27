
function vowels(word)


{
    let vowel="";const arr=[];
    for(let i=0; i<word.length;i++)
    {
        if(word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i' || word.charAt(i) == 'o' || word.charAt(i) == 'u'
    || word.charAt(i) == 'A' || word.charAt(i) == 'E' || word.charAt(i) == 'I' || word.charAt(i) == 'O' || word.charAt(i) == 'U')
    {
        
      vowel+=word.charAt(i)+", ";

    }
    


    }
    console.log("Input: "+"\""+word+"\", Output: Vowels: "+ vowel);
   
}

 vowels("eeeeet");