import { Component, OnInit, Input } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() searchText;

  employees;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employees = this.employeesService.getEmps();
  }
  
}
