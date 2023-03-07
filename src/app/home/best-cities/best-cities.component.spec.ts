import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCitiesComponent } from './best-cities.component';

describe('BestCitiesComponent', () => {
  let component: BestCitiesComponent;
  let fixture: ComponentFixture<BestCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestCitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
