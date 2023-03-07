import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseComponent } from './why-choose.component';

describe('WhyChooseComponent', () => {
  let component: WhyChooseComponent;
  let fixture: ComponentFixture<WhyChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
