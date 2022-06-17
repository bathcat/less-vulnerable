import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherReport } from './weather-report';

const API_URL = 'https://localhost:7232/weatherreports';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {
    this.refresh();
  }

  private refresh() {
    this.http
      .get<Array<WeatherReport>>(API_URL)
      .subscribe(xs => this.weathersSubject.next(xs));
  }

  private readonly weathersSubject = new BehaviorSubject<Array<WeatherReport>>(
    []
  );

  public readonly weather$ = this.weathersSubject.asObservable();

  public save(report: WeatherReport) {
    if (report.id) {
      console.log('Looooks like a put baby!!!!!');
      this.http
        .put<WeatherReport>(`${API_URL}/${report.id}`, report)
        .subscribe(response => {
          this.refresh();
        });
      return;
    }
    this.http.post<WeatherReport>(API_URL, report).subscribe(response => {
      this.refresh();
    });
  }

  public delete(report: WeatherReport) {
    this.http
      .delete<WeatherReport>(`${API_URL}/${report.id}`)
      .subscribe(response => {
        this.refresh();
      });
  }
}
