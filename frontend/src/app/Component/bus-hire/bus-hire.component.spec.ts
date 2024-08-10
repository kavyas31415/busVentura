import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusHireComponent } from './bus-hire.component';

describe('BusHireComponent', () => {
  let component: BusHireComponent;
  let fixture: ComponentFixture<BusHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusHireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
