import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPhysioComponent } from './register-physio.component';

describe('RegisterPhysioComponent', () => {
  let component: RegisterPhysioComponent;
  let fixture: ComponentFixture<RegisterPhysioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPhysioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPhysioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
