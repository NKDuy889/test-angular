import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://6069627b0add490017340a6b.mockapi.io/test/employee');
  }
}
