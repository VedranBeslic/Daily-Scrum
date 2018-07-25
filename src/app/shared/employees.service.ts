import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees = [
    {name: 'Uposlenik 1'}, 
    {name: 'Uposlenik 2'}, 
    {name: 'Uposlenik 3'}, 
    {name: 'Uposlenik 4'}, 
    {name: 'Uposlenik 5'}, 
    {name: 'Uposlenik 6'}, 
    {name: 'Uposlenik 7'}, 
    {name: 'Uposlenik 8'}, 
    {name: 'Uposlenik 9'}, 
    {name: 'Uposlenik 1'}, 
    {name: 'Uposlenik 2'}, 
    {name: 'Uposlenik 3'}, 
    {name: 'Uposlenik 4'}, 
    {name: 'Uposlenik 5'}, 
    {name: 'Uposlenik 6'}
  ];

  constructor() { }

  getEmps() {
    return this.employees;
  }
}
