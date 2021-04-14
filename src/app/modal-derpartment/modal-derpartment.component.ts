import { Component, Inject, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentModel } from '../model/department.model';
import { DepartmentService } from '../service/department.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-derpartment',
  templateUrl: './modal-derpartment.component.html',
  styleUrls: ['./modal-derpartment.component.scss']
})
export class ModalDerpartmentComponent implements OnInit {
  department: DepartmentModel = new DepartmentModel();
  formGroup = this.fb.group({
    code: ['', [Validators.required, Validators.maxLength(10)]],
    name: ['', [Validators.required, Validators.maxLength(100)]],
    create: [{value: '', disabled: true}],
    update: [{value: '', disabled: true}]
  })
  constructor(
    private departmentService: DepartmentService,
     public dialogRef: MatDialogRef<ModalDerpartmentComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
     private fb: FormBuilder
     ) { }

  ngOnInit(): void {
    this.getDepartment(this.data.id);
  }

  getDepartment(id: number) {
    this.departmentService.getDPById(id).subscribe((res) => {
      this.department = res as DepartmentModel;
      this.department.create = new Date(Number.parseInt(this.department.createDate + ""));
      this.department.update = new Date(Number.parseInt(this.department.updateDate + ""));
      this.formGroup.patchValue(this.department);
      
    })
  }

  saveDepartment() {
    if(this.formGroup.invalid) return;
    const value = this.formGroup.value;
    this.department.code = value.code;
    this.department.name = value.name;
    this.departmentService.updateById(this.department).subscribe((res) => {
      this.dialogRef.close();
    })
  }

  errors(controlName: string, error: string) {
    const control = this.formGroup.controls[controlName];
    return (control.touched || control.dirty) && control.errors != null && control.errors[error];
  }
}
