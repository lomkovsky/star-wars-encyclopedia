import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleListComponent } from './people/people-list/people-list.component';
import { StarshipViewComponent } from './starships/starship-view/starship-view.component';
import { StarshipListComponent } from './starships/starship-list/starship-list.component';
import { PeopleViewComponent } from './people/people-view/people-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:id', component: PeopleViewComponent },
  { path: 'starships/:id', component: StarshipViewComponent },
  { path: 'starships', component: StarshipListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
