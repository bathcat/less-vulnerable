import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Snake } from './snake';

const API_URL = 'https://localhost:7232/snakes';

@Injectable({
  providedIn: 'root',
})
export class SnakeService {
  constructor(private readonly http: HttpClient) {
    this.refresh();
  }

  private refresh() {
    this.http
      .get<Array<Snake>>(API_URL)
      .subscribe(xs => this.snakesSubject.next(xs));
  }

  private readonly snakesSubject = new BehaviorSubject<Array<Snake>>([]);

  public readonly snake$ = this.snakesSubject.asObservable();

  public save(targe: Snake) {
    if (targe.id) {
      console.log('Looooks like a put baby!!!!!');
      this.http
        .put<Snake>(`${API_URL}/${targe.id}`, targe)
        .subscribe(response => {
          this.refresh();
        });
      return;
    }
    this.http.post<Snake>(API_URL, targe).subscribe(response => {
      this.refresh();
    });
  }

  public delete(target: Snake) {
    this.http.delete<Snake>(`${API_URL}/${target.id}`).subscribe(response => {
      this.refresh();
    });
  }
}
