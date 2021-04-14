import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './test/test.component';
import {AppComponent} from './app.component';
import {EmployeeComponent} from './test2/employee.component';
import {DepartmentComponent} from './department-component/department.component';

const routes: Routes = [
  {path: '',
  component: EmployeeComponent},
  {path: 'test',
  component: TestComponent},
  {path: 'employee',
    component: EmployeeComponent},
  {path: 'department',
    component: DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
