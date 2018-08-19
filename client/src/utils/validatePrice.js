const re = /^[+-]?(?=.)(?:\d+,)*\d*(?:\.\d+)?$/;

export default input => {

  const invalidNumbers = input
    .split(" ")
    .map(num => num.trim())
    .filter(num => re.test(num) === false);

  if (!invalidNumbers[invalidNumbers.length - 1]) {
    invalidNumbers.splice(invalidNumbers.length - 1, 1);
  }

  if (invalidNumbers.length) {
    return `Invalid Input: ${invalidNumbers}`;
  }

  return;
}