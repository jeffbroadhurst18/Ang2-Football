import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent  { name = 'Football Project'; }
