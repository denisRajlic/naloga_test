// This function accepts numbers as string from 0 to 9 and return the appropriate number.
// Returns -1 if input is invalid
function getNumFromString(num) {
  const numLower = num.toLowerCase();

  if (numLower === 'one') return 1;
  if (numLower === 'two') return 2;
  if (numLower === 'three') return 3;
  if (numLower === 'four') return 4;
  if (numLower === 'five') return 5;
  if (numLower === 'six') return 6;
  if (numLower === 'seven') return 7;
  if (numLower === 'eight') return 8;
  if (numLower === 'nine') return 9;
  if (numLower === 'zero') return 0;

  // If the number is not valid return -1
  return -1;
}

function getResult(inputString) {
  if (typeof inputString !== 'string') return -1;

  const numArray = inputString.split('-');

  if (numArray.length === 1) return getNumFromString(inputString);

  let returnString = '';
  let number = 0;
  let result = 0;
  let invalidCount = 0;

  numArray.forEach((num, index) => {
    number = getNumFromString(num);

    // Check if input was invalid
    if (number === -1) {
      invalidCount++;
      // if the invalid number is the last one in the array, replace the + with = and append the result
      if (index === numArray.length - 1)
        return (returnString = returnString.slice(0, -1) + `=${result}`);
      else return;
    }

    result += number;

    if (index !== numArray.length - 1) returnString += `${number}+`;
    else returnString += `${number}=${result}`;
  });

  if (invalidCount === numArray.length) return -1;

  return returnString;
}

module.exports = getResult;
