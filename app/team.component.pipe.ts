import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reduceDate' })
export class ReduceDatePipe implements PipeTransform {
    transform(input: string): string {
        var parts = input.split(" ");
        var out = parts[0].substring(0, 3) + " " + parts[1] + " " + parts[2];
        return out;
    }
}

@Pipe({ name: 'reduceTime' })
export class ReduceTimePipe implements PipeTransform {
    transform(input: string): string {
        var out = input.substring(0, 5);
        return out;
    }
}

@Pipe({ name: 'reduceCompetition' })
export class ReduceCompetitionPipe implements PipeTransform {
    transform(input: string): string {
        var out = '';
        switch (input) {
            case "National League":
                out = "NL";
                break;
            case "Emirates FA Cup":
                out = "FAC";
                break;
            default:
                out = "Other";
        }
        return out;
    }
}