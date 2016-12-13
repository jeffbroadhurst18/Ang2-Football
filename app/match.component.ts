import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MatchService } from './match.service';
import { Match,Team } from './match';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-match-detail',
    templateUrl: 'match.component.html',
    styleUrls: ['app.component.css']
})

export class MatchComponent implements OnInit {
    match: Match;
    teams: Team[];
    team0: Team;
    team1: Team;
    image0:string;
    image1:string;
        
    constructor(
        private matchService: MatchService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.getMatch(id);
        });
    }

    getMatch(matchId: number) {
        this.matchService.getMatch(matchId).subscribe(
            data => { this.processMatch(data) },
            err => console.error(err),
            () => console.log('done loading match id:' + matchId)
        )
    }

    processMatch(data: any) {
        this.match = data.match;
        this.team0 = data.match.teams[0];
        this.team1 = data.match.teams[1];
        this.image0 = "data/pictures/pic-" + data.match.teams[0].no + ".jpg";
        this.image1 = "data/pictures/pic-" + data.match.teams[1].no + ".jpg";
        this.populateSubs(0,this.team0);
        this.populateSubs(1,this.team1);  
    }

 populateSubs(id : number,team: Team)
{
    for (var i = 0; i < team.players.length; i++) {
        team.players[i].playerType =  i < 11 ? "football-player" : "football-sub" ;
        if (team.players[i].substitution == null) {
            team.players[i].substitution = { replacedBy: " ", minute: " " };
        }
        if (team.players[i].caution == null) {
            team.players[i].caution = { minute: " " };
        }
        if (team.players[i].sendingOff == null) {
            team.players[i].sendingOff = { minute: " " };
        }
    }
    return team;
}

}