import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Page } from 'src/app/shared/models/page.model';
import { ViewCustomer } from '../../models/view-customer.model';
import { CustomerService } from '../../services/customer.service';
import { Column } from 'src/app/shared/models/column.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  columns: Column[] = [
    { header: 'Nome', field: 'name' },
    { header: 'Email', field: 'email' },
    { header: 'Data de Nascimento', field: 'birthDate' }
  ]

  customers: Page<ViewCustomer> = new Page<ViewCustomer>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.customerService.findAll()
      .subscribe({
        next: (page) => this.customers = page,
        error: (error) => console.log(error)
      });
  }

  getDisplayedColumns(): string[] {
    return this.columns.map(column => column.field);
  }

}
