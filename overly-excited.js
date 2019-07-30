

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the moon"];

// The addExcitement function should accept the array as the sole argument
 function addExcitement (theWordArray,character,multiplier) {
    let buildMeUp = " "
    for (let i = 0; i < theWordArray.length; i++) {

        if ((i + 1) % 3 === 0 && i !== 0) {

            buildMeUp += theWordArray[i] + character.repeat(multiplier) + " ";

        } else {
            buildMeUp += theWordArray[i] + " ";
        }
     
        
    }
  return buildMeUp
}
console.log(addExcitement(sentence, "!", 1))
    addExcitement(sentence, "!")
    