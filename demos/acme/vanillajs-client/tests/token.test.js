import { decode } from '../src/services/token.mjs';
import { expect, test } from '@jest/globals';

test('decode should decode legit token', () => {
  //Arrange
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqYmxvZ2dzQGV4YW1wbGUuY29tIiwianRpIjoiNDJhNzM5ZDAtZTNkOC00ZWIzLTlkNjYtZjY2NDEyMjAyZWVmIiwibmJmIjoxNjU1NTYxMDAyLCJleHAiOjE2NTU1NjQ2MDIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.FsdUTquXC7C1LBKqOQHbxHiLGVC-J38zbsTNLTB1cKM';

  //Act
  const result = decode(token);

  //Assert
  expect(result).toBeTruthy();
});
