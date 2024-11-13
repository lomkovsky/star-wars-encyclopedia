import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StarshipsService } from '../starships.service';
import { IStarship } from 'src/app/models/starship';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})

export class StarshipListComponent implements OnInit {
  starships!: IStarship[];

  constructor(
    private starshipsService: StarshipsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.starshipsService.getStarshipsList(null).subscribe(body => {
      this.starships = body.results as IStarship[];
      this.getAllstarships(body.next);
    })
  }
  getAllstarships(nextPage: string): void {
    if (nextPage) {
      this.starshipsService.getStarshipsList(nextPage).subscribe(nextBody => {
        this.starships = this.starships.concat(nextBody.results as any);
        this.getAllstarships(nextBody.next);
      })
    }
  }
  routerById(url: string): void {
    this.router.navigate([`/starships/${this.getIdFromUrl(url)}`]);
  }
  getIdFromUrl(url: string): string {
    url = url.slice(0, -1);
    return url.substring(url.lastIndexOf('/') + 1)
  }
  
}