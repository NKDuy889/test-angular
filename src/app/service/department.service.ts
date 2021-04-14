import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DepartmentModel } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDP(){
    return this.http.get('https://6069627b0add490017340a6b.mockapi.io/test/department');
  }

  getDPById(id: number){
    return this.http.get(`https://6069627b0add490017340a6b.mockapi.io/test/department/${id}`);
  }

  updateById(department: DepartmentModel){
    return this.http.put(`https://6069627b0add490017340a6b.mockapi.io/test/department/${department.id}`, department);
  }
}
