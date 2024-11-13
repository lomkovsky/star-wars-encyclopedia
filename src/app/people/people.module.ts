import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleViewComponent } from './people-view/people-view.component';

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    RouterLink,
    MatSnackBarModule,
  ]
})
export class PeopleModule { }
