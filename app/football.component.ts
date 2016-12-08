import { Component, OnInit } from '@angular/core';
import { FootballService } from './football.service';
import { ActivatedRoute, Params} from '@angular/router';
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
    public teams:any;
    public teamList:any;
  
    constructor(private footballService: FootballService) {

    }
    private headers = new Headers({ 'Content-Type': 'application/json' });

    ngOnInit(): void {
        this.getTeams();
        this.getLeague();
    }

    getLeague() {
        this.footballService.getLeague().subscribe(
             data => { this.displayLeague(data)},
            err => console.error(err),
            () => console.log('done loading league')
        )
    };

    displayLeague(data: any) {
        this.comp = data.leagueTable.competition;
        this.teams = data.leagueTable.team;

        for (var i=0; i < this.teamList.length; i++)
        {
            for (var j = 0; j < this.teams.length; j++)
            {
                if (this.teams[j].name == this.teamList[i].name)
                {
                    this.teams[j].number = this.teamList[i].id;
                    break;
                }
            }
        }
    }

    getTeams() {
        this.footballService.getTeams().subscribe(
            data => { this.processTeamList(data)},
            err => console.error(err),
            () => console.log('done loading team list')
        )
    };

    processTeamList(data:any) {
        this.teamList = data.teams.team;
    }
}