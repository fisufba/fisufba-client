import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleStrengthComponent } from './muscle-strength.component';

describe('MuscleStrengthComponent', () => {
  let component: MuscleStrengthComponent;
  let fixture: ComponentFixture<MuscleStrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscleStrengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
