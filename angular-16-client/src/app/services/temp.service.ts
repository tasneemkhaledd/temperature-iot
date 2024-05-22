import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temp } from '../models/temp.model';

const baseUrl = 'http://localhost:3000/temps';

@Injectable({
  providedIn: 'root',
})
export class TempService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Temp[]> {
    return this.http.get<Temp[]>(baseUrl);
  }

  get(id: any): Observable<Temp> {
    return this.http.get<Temp>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByLocation(payload: any): Observable<Temp[]> {
    return this.http.get<Temp[]>(`${baseUrl}?payload=${payload}`);
  }
}
