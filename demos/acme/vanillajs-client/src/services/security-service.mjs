const storageKey = 'xyz';
import { decode } from './token.mjs';
import { BehaviorSubject } from '/infrastructure/behavior-subject.mjs';

const anonymous = Object.freeze({
  isLoggedIn: false,
  login: '',
  token: '',
  isOver21: false,
});

export class SecurityService {
  #loginInfo$ = new BehaviorSubject(anonymous);
  constructor() {}

  get loginInfo$() {
    //TODO: Hide next()
    return this.#loginInfo$;
  }

  set token(value) {
    //TODO: Maybe validate this or something.
    if(!value){
      this.#loginInfo$.next(anonymous);
      return;
    }
    this.#loginInfo$.next({
      isLoggedIn: true,
      login: 'some.fake@example.com',
      token: value,
      isOver21: true,
    });
  }
}
