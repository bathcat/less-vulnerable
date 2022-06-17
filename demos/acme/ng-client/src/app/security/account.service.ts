import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

const API_URL = 'https://localhost:7232/authenticationrequests';

interface AuthenticationRequest {
  login: string;
  password: string;
}

interface AccountInfo {
  token: string;
  id: string;
  givenName: string;
  surname: string;
  login: string;
  isLoggedIn: boolean;
}

export const Anonymous: Readonly<AccountInfo> = {
  token: '',
  id: '',
  givenName: '',
  surname: '',
  login: '',
  isLoggedIn: false,
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private readonly http: HttpClient,
    private readonly localStorage: LocalStorageService
  ) {}
  private readonly storageKey = 'xyz';

  readonly accountInfoSubject = new BehaviorSubject<AccountInfo>(
    this.localStorage.get<AccountInfo>(this.storageKey) || Anonymous
  );

  public readonly accountInfo$ = this.accountInfoSubject.asObservable();
  public readonly loggedIn$ = this.accountInfo$.pipe(map(a => a.isLoggedIn));

  readonly login = (request: AuthenticationRequest) =>
    this.http
      .post<Omit<AccountInfo, 'isLoggedIn'>>(API_URL, request)
      .subscribe(response => {
        const info = { ...response, isLoggedIn: true };
        this.localStorage.set(this.storageKey, info);
        this.accountInfoSubject.next(info);
      });

  readonly logout = () => {
    this.localStorage.clear(this.storageKey);
    this.accountInfoSubject.next(Anonymous);
  };
}
