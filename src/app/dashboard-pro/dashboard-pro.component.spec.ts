import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProComponent } from './dashboard-pro.component';

describe('DashboardProComponent', () => {
  let component: DashboardProComponent;
  let fixture: ComponentFixture<DashboardProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
