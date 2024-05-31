    
//Program 1    
    let char = "Hello world";
    let char1 = char.split(" ");
    let lastWord = char1[char1.length-1];
    let lastWordLength = lastWord.length;
  
    console.log(`last word of ${char} is ${lastWord} and length of ${lastWord} is ${lastWordLength}`);
    
//Program 2
    let  s = " fly me to the moon ";
    let s1 = s.split(" ");
    let sLastWordLength = s1[1].length;
    console.log(`last word of ${s} is ${s1[1]} and length of ${s1[1]} is ${sLastWordLength}`);

//Program 3    
    function isAnagram(str1,str2)
    {
        console.log(`Is ${str1} and ${str2} are Anagram? `);
        let str3 ="";
        str1.trim();
        str2.trim();
        let n1 = str1.length;
        let n2 = str2.length;
        if(n1!=n2)
            return false;

        for(let i=0; i<n1; i++)
            {
                for(let j=0; j<n2; j++ )
                {
                if(str1[i]!=str2[j])
                {
                    continue;
                }
                else
                {
                    str3 = str3+str2[j];
                    break;
                }
                }
                         
            }
        for(let k=0;k<n1;k++)
            {
                if(str1[k]!=str3[k])
                    return false;
            }
            return true;
    }
    console.log(isAnagram("pri ya","rpiay "));