const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function splitTitle(title){
//   const splitTitle = title.split(' ');
//   return splitTitle;
// }

// function splitWord(wordInTitle){
//   const splitWord = wordInTitle.split('');
//   return splitWord;
// }

// function capitalizeFirstLetter(array) {
//   const capitalizeFirstLetterOfArray = Object.assign([],array, array[0].toUpperCase());
//   return capitalizeFirstLetterOfArray;
// }

// function lettersToWord(array){
//   const lettersToWord = array.join('');
//   return lettersToWord;
// }

// function wordsToTitle(array){
//   const wordsToTitle = array.join(' ');
//   return wordsToTitle;
// }

const titleCased = () => {
  return tutorials.map(
     (title) => {
       const splitTitle = title.split(' ')
       return splitTitle.map((word) => {
        const splitWord = word.split('')
        return Object.assign([], word, splitWord[0].toUpperCase()).join('')
       }).join(' ')
     }
  )
}
