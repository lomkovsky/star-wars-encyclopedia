import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { People } from 'src/app/models/people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: People[] = [];
  filteredPeople: People[] = [];
  sortOrder: string = '';


  constructor(
    private peopleService: PeopleService,
    private router: Router,
  ) {};

  ngOnInit(): void {
    this.peopleService.getPeopleList(null).subscribe(body => {
      this.people = this.people.concat(body.results as People[]);
      this.filteredPeople = this.people.concat(body.results as People[]);
      this.getAllPeopleList(body.next);
    })
  }

  getAllPeopleList(nextPage: string): void {
    if (nextPage) {
      this.peopleService.getPeopleList(nextPage).subscribe(nextBody => {
        this.people = this.people.concat(nextBody.results as any);
        this.filteredPeople = this.people.concat(nextBody.results as any);
        this.getAllPeopleList(nextBody.next);
      })
    }
  }

  getIdFromUrl(url: string): string {
    url = url.slice(0, -1);
    return url.substring(url.lastIndexOf('/') + 1)
  }

  routerById(url: string): void {
    this.router.navigate([`/people/${this.getIdFromUrl(url)}`]);
  }


  applyFilter(event: Event): void {
    let serchTerm = (event.target as HTMLInputElement).value;
    serchTerm = serchTerm.toLowerCase();
    this.filteredPeople = this.people.filter(
      people => people.name.toLowerCase().includes(serchTerm)
    )
    this.sortPeople(this.sortOrder);
  }

  sortPeople(sortValue: string): void {
    this.sortOrder = sortValue;
      for (let object of this.filteredPeople) {
        if(object.mass !== "unknown") {
          object.massNumber = +object.mass.replace(",", "");;
        } else {
          object.massNumber = 0;
        }
    }
    if (this.sortOrder === 'higherMass') {
      this.filteredPeople.sort((a,b) => b.massNumber - a.massNumber);
    } else if (this.sortOrder === 'lowerMass') {
      this.filteredPeople.sort((a, b) => a.massNumber - b.massNumber);
    }
  }
}
