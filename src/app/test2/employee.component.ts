import {Component, OnInit} from '@angular/core';
import {MusicService} from '../service/music.service';
import {EmployeeModel} from '../model/employee.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TestComponent} from '../test/test.component';

@Component({
  selector: 'app-test2',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  listEmployee: EmployeeModel[] = [];
  show = false;

  constructor(private musicService: MusicService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.musicService.getAll().subscribe((res) => {
      this.listEmployee = res as EmployeeModel[];
      console.log(this.listEmployee);
    });
  }

  toShow() {
    this.show = !this.show;
    const modal = this.modalService.open(TestComponent);
    modal.componentInstance.data = 'ahih';
  }
}
