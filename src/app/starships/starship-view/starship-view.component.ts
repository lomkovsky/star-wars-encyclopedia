import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { StarshipsService } from '../starships.service';
import { IStarship } from 'src/app/models/starship';

@Component({
  selector: 'app-starship-view',
  templateUrl: './starship-view.component.html',
  styleUrls: ['./starship-view.component.css']
})
export class StarshipViewComponent implements OnInit {
  statshipForm: FormGroup = new FormGroup({});

  starshipId: string = '';
  starship: IStarship = {
    MGLT: '',
    cargo_capacity: '',
    consumables: '',
    cost_in_credits: '',
    created: new Date(),
    crew: '',
    edited: new Date(),
    hyperdrive_rating: '',
    length: '',
    manufacturer: '',
    max_atmosphering_speed: '',
    model: '',
    name: '',
    passengers: '',
    films: [],
    pilots: [],
    starship_class: '',
    url: ''
  };

  constructor(
    private starshipsService: StarshipsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    
    this.statshipForm = this.formBuilder.group({
      name: '',
      length: ''
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.starshipId = id;
      this.starshipsService.getStarship(id).subscribe(body => {
        this.starship = body;
        this.statshipForm.patchValue(body)
      })
    }

  }
  deleteStarship(): void {
    // this.starshipsService.deleteStarship(this.starshipId).subscribe(() =>{});
    this.starshipsService.deleteStarship(this.starshipId);  //temp solution
    this.snackbar.open(`${this.starship.name} is deleted`, "", {
      duration: 2000,
      horizontalPosition : 'right',
      verticalPosition: 'top'
    });
    this.router.navigate(['/starships']);
  }
  updateStarship(): void {
    let statship: IStarship = this.statshipForm.value;
    // this.starshipsService.updateStarship(this.starshipId, statship).subscribe(() =>{})
    this.starshipsService.updateStarship(this.starshipId, statship);  //temp solution
    this.snackbar.open(`${this.starship.name} has been updated`, "", {
      duration: 2000,
      horizontalPosition : 'right',
      verticalPosition: 'top'
    });
    this.router.navigate([`/starships/${this.starshipId}`]);
  }
}
