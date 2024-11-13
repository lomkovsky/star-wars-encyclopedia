import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PeopleService } from '../people.service';
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.css']
})
export class PeopleViewComponent {
  peopleForm: FormGroup = new FormGroup({});

  peopleId: string = '';
  people: People = new People;

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    
    this.peopleForm = this.formBuilder.group({
      name: '',
      height: '',
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.peopleId = id;
      this.peopleService.getPeople(id).subscribe(body => {
        this.people = body;
        this.peopleForm.patchValue(body)
      })
    }
  }
  deletePeople(): void {
    // this.peopleService.deletePeople(this.peopleId).subscribe(() =>{}); 
    this.peopleService.deletePeople(this.peopleId); //temp solution
    this.snackbar.open(`${this.people.name} is deleleted`, "", {
      duration: 2000,
      horizontalPosition : 'right',
      verticalPosition: 'top'
    });
    this.router.navigate(['/people']);
  }
  updatePeople(): void {
    let people: People = this.peopleForm.value;
    // this.peopleService.updatePeople(this.peopleId, people).subscribe({
    //   next: ()  => {
    //     this.snackbar.open('Your people has been updated');
    //   }   });
    this.peopleService.updatePeople(people, this.peopleId);  //temp solution
    this.snackbar.open(`${this.people.name} has been updated`, "", {
      duration: 2000,
      horizontalPosition : 'right',
      verticalPosition: 'top'
    });
    this.router.navigate([`/people/${this.peopleId}`]);
  }

}
