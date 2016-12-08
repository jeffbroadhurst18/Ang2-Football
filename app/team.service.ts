import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import { Matchescompetition } from './matches'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TeamService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
    constructor(private http: Http) { }

    getMatches(teamId:any) {
        return this.http.get('data/matches-' + teamId + '.json').map((res:Response) => res.json());
    }

     private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}