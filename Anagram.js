/*An anagram is a word, phrase, or sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Given an array of words write a method that will return the total number of different anagrams inside that array. You can only count once the anagram between 2 words. For instance, in the previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite between "glean" and "angel".

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]*/

function anagramCounter (wordsArray) {
    let counter  = 0;

    for(let i = 0; i < wordsArray.length - 1; i++) {
        let compare1 = wordsArray[i].split("")
        let compare2 = wordsArray[i+1].split("");

        function sumChars(compares) {
            let sum = 0;
            for(let j = 0; j < compares.length; j++) {
                sum += compares[j].charCodeAt(0);
            }

        return sum;
        }

        if(sumChars(compare1) === sumChars(compare2)) counter++    
    }

    return counter;
}