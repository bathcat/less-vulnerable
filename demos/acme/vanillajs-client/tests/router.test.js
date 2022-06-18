import { Router } from '../src/services/router.mjs';
import { expect, test } from '@jest/globals';

// test('should get home', () => {
//   //Arrange
//   const expected = '<xyz-home></xyz-home>';
//   const router = new Router([
//     {
//       path: '/',
//       template: expected,
//     },
//   ]);
//   //Arrange
//   const actual = router.getRoute('/');

//   //Assert
//   expect(actual.template).toBe(expected);
// });

// test('should get 404', () => {
//   //Arrange
//   const expected = '<h1>Not Found</h1>';
//   const router = new Router([
//     {
//       path: 404,
//       template: expected,
//     },
//   ]);
//   //Arrange
//   const actual = router.getRoute('/lubbalubbadubdub');

//   //Assert
//   expect(actual.template).toBe(expected);
// });

// test('should get wildcard', () => {
//   //Arrange
//   const expected = '<xyz-widget-details></xyz-widget-details>';
//   const router = new Router([
//     {
//       path: '/widgets',
//       template: '<xyz-widget-list></xyz-widget-list>',
//     },
//     {
//       path: '/widgets/:id',
//       template: expected,
//     },
//   ]);
//   //Arrange
//   const actual = router.getRoute('/widgets/44');

//   //Assert
//   expect(actual.template).toBe(expected);
// });
