import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth} from '../models/auth.model';

const baseUrl = 'http://localhost:3000/auths/signup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${baseUrl}/login`,
      {
        email,
        password,
      },
      //httpOptions
    );
  }

  getAll(): Observable<Auth[]> {
    return this.http.get<Auth[]>(baseUrl);
  }
  
  get(id: any): Observable<Auth> {
    return this.http.get<Auth>(`${baseUrl}/${id}`);
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

  findByemail(email: any): Observable<Auth[]> {
    return this.http.get<Auth[]>(`${baseUrl}?email=${email}`);
  }
  
}
