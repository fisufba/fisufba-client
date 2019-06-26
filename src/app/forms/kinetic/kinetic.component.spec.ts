import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KineticComponent } from './kinetic.component';

describe('KineticComponent', () => {
  let component: KineticComponent;
  let fixture: ComponentFixture<KineticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KineticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KineticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
