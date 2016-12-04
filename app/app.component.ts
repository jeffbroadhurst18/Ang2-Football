import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `
    <h1>{{title}}</h1>
    <my-football></my-football>
    `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent  { name = 'Football Project'; }
