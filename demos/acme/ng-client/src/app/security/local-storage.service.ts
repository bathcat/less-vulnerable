import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public get<T>(key: string): T | null {
    const asString = localStorage.getItem(key);
    if (!asString) {
      return null;
    }
    return JSON.parse(asString);
  }

  public set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public clear(key: string) {
    localStorage.removeItem(key);
  }
}
