import { Component, OnInit } from '@angular/core';
import { FootballService } from './football.service';
import { team } from './league';
import { League } from './league';
import { leagueTable } from './league';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'my-football',
    templateUrl: 'football.component.html',
    styleUrls: ['football.component.css']
})

export class FootballComponent implements OnInit {
    public comp:any;
    public teams;
  
    constructor(private footballService: FootballService) {

    }
    private headers = new Headers({ 'Content-Type': 'application/json' });

    ngOnInit(): void {
        this.getTeams();
    }

    getTeams() {
        this.footballService.getTeams().subscribe(
             data => { this.display(data)},
            err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading league')
        )
    };

    display(data: any) {
        this.comp = data.leagueTable.competition;
        this.teams = data.leagueTable.team;
    }
}