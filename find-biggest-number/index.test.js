const { getBiggestNumber } = require('./index');

test('Test 1', () => {
    const input = [0,10,1,99,9,8,79,91,22,32,12]
    const output = "999918793222121100"
    expect(getBiggestNumber(input)).toBe(output);
});

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });