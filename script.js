//Missing letters

/* input - string of character"a-z"
    output - undefined |or| the missing letter
     single possible missing charater

no special chararters
no wrap around 'a to z'
a! = A - false for computer
case not important */


function fearNotLetter(str) {
  //var firstChar = str[0];
  //console.log(firstChar.charCodeAt(0));
  //console.log("char code of a:","a".charCodeAt(0));
for(var i = 0; i < str.length - 1; i++)
  if(str.charCodeAt(i + 1) == str.charCodeAt(i) + 1){
  //if(str.charCodeAt(1) == str.charCodeAt(0) + 1){
      console.log("next char is next in alphabet");
    } else{  //console.log("next char is not expected char");
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
     //console.log("hello");
    //return str;
  }

fearNotLetter("ab");

/* Example:
    input - "abce"
     output - "d"

 1. First character of input
 
 2. Check if next letter is next in alphabet
 
    3. Check if another letter available
    
        4. Go to next letter and repeat step 2
        
    5. else
    
         6. Return undefined
         
    7. else
    
       8. return expected character */