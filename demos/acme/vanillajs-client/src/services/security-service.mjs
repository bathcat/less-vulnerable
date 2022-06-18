const storageKey = 'xyz';
import { decode } from './token.mjs';

export class SecurityService {
  #token = '';
  constructor() {

  }

  get token() {
    return this.#token;
  }

  set token(value){
    //TODO: Maybe validate this or something.
    this.#token=value;
  }

}
