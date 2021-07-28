const getResult = require('./main.js');

it('returns correct result with valid input', () => {
  const result = getResult('one-two');

  expect(result).toEqual('1+2=3');
});

it('return -1 if empty or one invalid number is passed', () => {
  let result = getResult('on');
  result = getResult('');

  expect(result).toEqual(-1);

  result = getResult('');
  expect(result).toEqual(-1);
});

it('ignores invalid numbers', () => {
  let result = getResult('one-two-th-four');

  expect(result).toEqual('1+2+4=7');
});

it('ignores invalid numbers even if it is the last number', () => {
  let result = getResult('one-two-three-fou');

  expect(result).toEqual('1+2+3=6');
});

it('excepts upper or lowercase strings as input', () => {
  let result = getResult('one-TWO-three-ZERO');

  expect(result).toEqual('1+2+3+0=6');
});
