import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HireService {
  private apiUrl = 'http://localhost:5000/bus-hire';

  constructor(private http: HttpClient) {}

  hireBus(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getAvailableBuses(params: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/available`, { params });
  }
}
