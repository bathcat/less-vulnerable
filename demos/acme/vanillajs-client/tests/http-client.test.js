import { HttpClient } from '../src/services/http-client.mjs';
import { expect, test } from '@jest/globals';

 test('get should include token when available', async () => {
  //Arrange
  let headers={};
  const token = 'aaaaaaaaaaaaaaaaaaaaa';
  const fakeFetch = (url,options)=>{
     headers=options.headers;
     return Promise.resolve({
        json(){
          Promise.resolve({});
        }
     });
  }

  const client = new HttpClient({
    rootUrl:'http://example.com',
    securityService:{ 
      loginInfo$:{
        value:{
          token
        }
      },
    },
    _fetch:fakeFetch,
  });

  //Act
  const _ = await client.get('/widgets');

  //Assert
  const expected = `Bearer ${token}`;
  expect(headers.Authorization).toBe(expected);
});