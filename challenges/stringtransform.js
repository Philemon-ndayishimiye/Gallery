
function stringtransformation(realworld){
    let wordlength = realworld.length;
//condition where length of the string is divible by  both three and five
      if(wordlength % 15===0){
         realworld = realworld.split('').reverse().join(''); // reverse string 
         realworld = realworld.split('').map(element=>element.charCodeAt(0)).join(''); // it will change each character in ASCCI CODE
      }
   
      //condition where length of the string  is divible by three
      else if(wordlength % 3===0){
         realworld =  realworld.split('').reverse().join(''); // reverse string 
      }
   //condition where length of the string  is divible by five
      else if(wordlength % 5===0){
         realworld = realworld.split('').map(element=>element.charCodeAt(0)).join('');
      }
     return realworld ;
   }
   
   let result1 = stringtransformation('pizza');
   console.log(result1);
   
   let result2 = stringtransformation('humberger')
   console.log(result2);
   
   let result3 =stringtransformation('ilikehumbergers')
   
   console.log(result3);
   