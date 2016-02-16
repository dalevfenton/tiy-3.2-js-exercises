( function(){
  /**
 *
 */
 // ---------------------
 // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
 // ---------------------
 function max( argOne, argTwo ){
     "use strict";
     if( argOne > argTwo ){
       return argOne;
     }else{
       return argTwo;
     }
 }

 
 // ---------------------
 // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
 // ---------------------

 function maxOfThree( argOne, argTwo, argThree ){
     "use strict";
     var arrNum = [argOne, argTwo, argThree];
     var largest = arrNum[0];
     for( var i = 0; i < arrNum.length; i++ ){
       if(arrNum[i] > largest ){
         largest = arrNum[i];
       }
     }
     return largest;
 }

 // ---------------------
 // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 // ---------------------

 function isVowel(char){
     "use strict";
     var pattern = /[aeiouAEIOU]/;
     var vowel = pattern.exec(char);
     console.dir( vowel );
     if(vowel){
       return true;
     }else{
       return false;
     }
 }

 // ---------------------
 // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
 // ---------------------

 function rovarspraket(phrase){
     "use strict";
     //not sure if there is an easier way to match only consonnants than to just
     //sort our the vowels first
     var consonant = /[a-zA-Z]/;
     var vowel = /[aeiouAEIOU]/;
     var newPhrase = '';
     for( var i = 0; i < phrase.length; i++ ){
       if(vowel.exec(phrase[i])){
         //we are on a vowel, add it to the list and move on
         newPhrase += phrase[i];
       } else if(consonant.exec(phrase[i])){
         //we are on a consonant so we need to double it and add an 'o' in between
         newPhrase += phrase[i] + 'o' + phrase[i];
       } else {
         //possibly white space or a number, just add it back
         newPhrase += phrase[i];
       }
     }
     return newPhrase;
 }

 // ---------------------
 // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
 // ---------------------

 function sum( numArray ){
     "use strict";
     var newSum = 0;
     for ( var i=0; i<numArray.length; i++){
       newSum += numArray[i];
     }
     return newSum;
 }

 function multiply( numArray ){
     "use strict";
     var newProduct = 1;
     for ( var i=0; i<numArray.length; i++){
       newProduct *= numArray[i];
     }
     return newProduct;
 }

 // ---------------------
 // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
 // ---------------------

 function reverse( oldStr ){
     "use strict";
     var newStr = '';
     for( var i=oldStr.length; i > 0; i-- ){
       newStr += oldStr[i-1];
     }
     return newStr;
 }

 // ---------------------
 // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
 // ---------------------

 function findLongestWord(words){
     "use strict";
     var longestWord = words[0];
     for ( var i=0; i < words.length; i++){
       if(words[i].length > longestWord.length){
         longestWord = words[i];
       }
     }
     return longestWord;
 }

 // ---------------------
 // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
 // ---------------------

 function filterLongWords(words, i){
     "use strict";
     var longerWords = [];
     for( var j=0; j< words.length; j++){
       if(words[j].length > i){
         longerWords.push(words[j]);
       }
     }
     return longerWords;
 }

 // ---------------------
 // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
 // ---------------------

 function charFreq(string){
     "use strict";
     var freqObj = {};
     for(var i=0; i<string.length; i++){
       if( freqObj.hasOwnProperty(string[i])){
         freqObj[string[i]] += 1;
       }else{
         freqObj[string[i]] = 1;
       }
     }
     return freqObj;
 }



}());
