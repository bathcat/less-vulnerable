import { _matchRoute } from '../src/services/router.mjs';
import { expect, test } from '@jest/globals';

test('_matchRoute should fail on mismatched lengths', () => {
  //Arrange
  const url = '/widgets/44';
  const route=  {
    path: '/sign-in',
    getTemplate: () => '<h1>!</h1>',
  };

  //Act 
  const actual = _matchRoute(url,route);

  //Assert
  expect(actual).toBeFalsy();
});

test('_matchRoute should fail on mismatched segment', () => {
  //Arrange
  const url = '/widgets/best/top-10';
  const route=  {
    path: '/widgets/worst/top-10',
    getTemplate: () => '<h1>!</h1>',
  };

  //Act 
  const actual = _matchRoute(url,route);

  //Assert
  expect(actual).toBeFalsy();
});

test('_matchRoute should pass on exact match', () => {
  //Arrange
  const url = '/widgets/best/top-10';
  const route=  {
    path: '/widgets/best/top-10',
    getTemplate: () => '<h1>!</h1>',
  };

  //Act 
  const actual = _matchRoute(url,route);

  //Assert
  expect(actual).toStrictEqual({...route,routeData:{}});
});

test('_matchRoute should extract wildcards', () => {
  //Arrange
  const url = '/widgets/22';
  const route=  {
    path: '/widgets/:id',
    getTemplate: () => '<h1>!</h1>',
  };

  //Act 
  const actual = _matchRoute(url,route);

  //Assert
  expect(actual).toBeTruthy();
  expect(actual.routeData).toStrictEqual({id:'22'});
});