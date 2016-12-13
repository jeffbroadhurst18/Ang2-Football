

export class Match {
    competition: string
    date: string
    time: string
    status: string
    teams: Team[]
    attendance: string
    venue: string
}

export class Team {
    side: string
    no: string
    name: string
    score: string
    goals: Goal[]
    players: Player[]
}

export class Goal {
    goal: string
}

export class Player {
    shirtNo: string
    name: string
    caution: Caution
    substitution: Substitution
    playerType: string
    sendingOff :SendingOff
}

export class Caution {
    minute: string
}

export class Substitution {
    replacedBy: string
    minute: string
}

export class SendingOff {
    minute : string
}
