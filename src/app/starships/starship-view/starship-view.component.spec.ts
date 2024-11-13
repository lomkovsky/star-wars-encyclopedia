import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipViewComponent } from './starship-view.component';

describe('StarshipViewComponent', () => {
  let component: StarshipViewComponent;
  let fixture: ComponentFixture<StarshipViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipViewComponent]
    });
    fixture = TestBed.createComponent(StarshipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
