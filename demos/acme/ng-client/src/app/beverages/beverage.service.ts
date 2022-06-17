import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Beverage } from './beverage';

const API_URL = 'https://localhost:7232/beverages';

@Injectable({
  providedIn: 'root',
})
export class BeverageService {
  constructor(private readonly http: HttpClient) {
    this.refresh();
  }

  private refresh() {
    this.http
      .get<Array<Beverage>>(API_URL)
      .subscribe(xs => this.beveragesSubject.next(xs));
  }

  private readonly beveragesSubject = new BehaviorSubject<Array<Beverage>>([]);

  public readonly beverage$ = this.beveragesSubject.asObservable();

  public save(targe: Beverage) {
    if (targe.id) {
      console.log('Looooks like a put baby!!!!!');
      this.http
        .put<Beverage>(`${API_URL}/${targe.id}`, targe)
        .subscribe(response => {
          this.refresh();
        });
      return;
    }
    this.http.post<Beverage>(API_URL, targe).subscribe(response => {
      this.refresh();
    });
  }

  public delete(target: Beverage) {
    this.http
      .delete<Beverage>(`${API_URL}/${target.id}`)
      .subscribe(response => {
        this.refresh();
      });
  }
}
