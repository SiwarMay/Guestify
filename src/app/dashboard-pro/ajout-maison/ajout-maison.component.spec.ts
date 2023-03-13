import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMaisonComponent } from './ajout-maison.component';

describe('AjoutMaisonComponent', () => {
  let component: AjoutMaisonComponent;
  let fixture: ComponentFixture<AjoutMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
