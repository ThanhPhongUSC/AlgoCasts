// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

const cleanStr = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

// function anagrams(stringA, stringB) {

//   let stringAMap = buildMap(stringA);
//   let stringBMap = buildMap(stringB);
//   if(Object.keys(stringAMap).length !== Object.keys(stringBMap).length)
//   {return false} else {
//       for (let char in stringAMap) {
//           if (stringAMap[char] !== stringBMap[char]) {
//               return false;
//           }
//       }
//   }

//   return true;
// }
// const buildMap = (str) => {
//   const strMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//       strMap[char] = strMap[char] + 1 || 1;
//   }
//   return strMap;
// };
// function anagrams(stringA, stringB) {}

module.exports = anagrams;
