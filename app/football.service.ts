import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import { team } from './league';
import { League } from './league';
import { leagueTable } from './league';

@Injectable()
export class FootballService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private leagueUrl = 'data/league.json';
    private teamsUrl = 'data/teams.json';
    constructor(private http: Http) { }

    getLeague() {
       return this.http.get(this.leagueUrl).map((res:Response) => res.json());
    }

    getTeams() {
        return this.http.get(this.teamsUrl).map((res:Response) => res.json());
    }
}