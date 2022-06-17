export class LocalStorageService {
  constructor() {}

   get(key) {
    const asString = localStorage.getItem(key);
    if (!asString) {
      return null;
    }
    return JSON.parse(asString);
  }

   set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key) {
    localStorage.removeItem(key);
  }
}
