import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MatchService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
    constructor(private http: Http) { }

    getMatch(matchId:any) {
        return this.http.get('data/match-' + matchId + '.json').map((res:Response) => res.json());
    }

     private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}