export class team {
    position: string;
    name: string;
    played: string;
    won: string;
    drawn: string;
    lost: string;
    for: string;
    against: string;
    goalDifference: string;
    points: string;
}

export class leagueTable {
    competition: string;
    description: string;
    team: team[];
}


export class League {
    leagueTable: leagueTable;
}
