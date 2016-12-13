import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { FootballComponent } from './football.component';
import { TeamComponent } from './team.component';
import { MatchComponent} from './match.component'; 

const routes: Routes = [
      {
        path: '',
        component: FootballComponent
      },
      {
        path:'team/:id',
        component: TeamComponent
      },
      {
        path:'match/:id',
        component: MatchComponent
      },
      // {
      // path: '',
      // redirectTo: '',
      // pathMatch: 'full'
      // }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule{}