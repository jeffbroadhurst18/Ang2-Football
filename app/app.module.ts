import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FootballComponent } from './football.component';
import { TeamComponent } from './team.component';
import { MatchComponent } from './match.component';

import { FootballService } from './football.service';
import { TeamService } from './team.service';
import { MatchService } from './match.service';
import { ReduceDatePipe, ReduceTimePipe, ReduceCompetitionPipe } from './team.component.pipe';
import './rxjs-extensions';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, FootballComponent, TeamComponent, MatchComponent,
   ReduceDatePipe, ReduceTimePipe, ReduceCompetitionPipe],
  bootstrap: [AppComponent],
  providers: [FootballService, TeamService, MatchService]
})
export class AppModule { }
