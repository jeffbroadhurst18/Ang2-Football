import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { FootballComponent } from './football.component';
import { FootballService } from './football.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,FootballComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FootballService]
})
export class AppModule { }
