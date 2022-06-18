import { zip } from '../src/tools.mjs';
import { expect, test } from '@jest/globals';

test('zip should return an empty array for two empty arrays', () => {
  //Arrange
  const [xs, ys] = [[],[]];

  //Act
  const result = zip(xs,ys);

  //Assert
  expect(Array.from(result)).toStrictEqual([]);
});

test('zip should do simple pairs', () => {
  //Arrange
  const xs = [1,2,3];
  const ys = [10,20,30];
  const expected = [
    [1,10],
    [2,20],
    [3,30],
  ];

  //Act
  const result = zip(xs,ys);

  //Assert
  expect(Array.from(result)).toStrictEqual(expected);
});