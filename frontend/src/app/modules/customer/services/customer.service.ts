import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/models/page.model';
import { ViewCustomer } from '../models/view-customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = 'http://localhost:8080/api/customer';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Page<ViewCustomer>> {
    return this.httpClient.get<Page<ViewCustomer>>(this.url);
  }

}
