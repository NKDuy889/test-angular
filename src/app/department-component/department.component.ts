import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../model/department.model';
import { DepartmentService } from '../service/department.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from '../test/test.component';
import { ModalDerpartmentComponent } from '../modal-derpartment/modal-derpartment.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-department-component',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  listDepartment: DepartmentModel[] = [];

  constructor(private departmentService: DepartmentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.departmentService.getAllDP().subscribe((res) => {
      this.listDepartment = res as DepartmentModel[];
    });
  }
  showById(id: any) {
    const dialogRef = this.dialog.open(ModalDerpartmentComponent, {
      width: '800px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAll()
    });
  }


}
