import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { endPoints } from '../services/ApiPath';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getUser = (page: number) => {
    return this.http.get(endPoints.getUsers + '?page=' + page);
  };

  public getHotels(): Observable<any> {
    return this.http.get('../hotel.json');
  }
}
