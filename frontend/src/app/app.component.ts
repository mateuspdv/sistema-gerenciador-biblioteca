import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu: any = [
    {
      name: 'Cliente',
      routerLink: '/clientes'
    }
  ]

  teste(): void {
    console.log('Foi');
  }

}
