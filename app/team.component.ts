import {Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import { TeamService } from './team.service';
import 'rxjs/add/operator/switchMap';

@Component({
moduleId: module.id,
selector: 'my-team-detail',
templateUrl: 'team.component.html',
})

export class TeamComponent implements OnInit {
constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location  
){}

public matches:any;

ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.getMatches(id);
    });
}

getMatches(id:any) {
        this.teamService.getMatches(id).subscribe(
            data => { this.processMatches(data)},
            err => console.error(err),
            () => console.log('done loading matches')
        )
    };

processMatches(data:any) {
        
        for(var i=0; i< data.matchesTeam.match.length; i++)
        {
            if (data.matchesTeam.match[i].status == "Full Time") {
                data.matchesTeam.match[i].score = data.matchesTeam.match[i].homeTeamName + " " + data.matchesTeam.match[i].homeTeamScore + "   " + data.matchesTeam.match[i].awayTeamName + " " + data.matchesTeam.match[i].awayTeamScore;
            }
            else {
                data.matchesTeam.match[i].score = data.matchesTeam.match[i].homeTeamName + " v " + data.matchesTeam.match[i].awayTeamName;
            }
        }

        this.matches = data.matchesTeam.match;
    }

}