import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { StarshipViewComponent } from './starship-view/starship-view.component';
import { StarshipListComponent } from './starship-list/starship-list.component';



@NgModule({
  declarations: [
    StarshipViewComponent,
    StarshipListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatSnackBarModule,
  ]
})
export class StarshipsModule { }
