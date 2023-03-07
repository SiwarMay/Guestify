import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMaisonComponent } from './detail-maison.component';

describe('DetailMaisonComponent', () => {
  let component: DetailMaisonComponent;
  let fixture: ComponentFixture<DetailMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
