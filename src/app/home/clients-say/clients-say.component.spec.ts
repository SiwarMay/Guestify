import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSayComponent } from './clients-say.component';

describe('ClientsSayComponent', () => {
  let component: ClientsSayComponent;
  let fixture: ComponentFixture<ClientsSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsSayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
