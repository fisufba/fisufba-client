import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LefsComponent } from './lefs.component';

describe('LefsComponent', () => {
  let component: LefsComponent;
  let fixture: ComponentFixture<LefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
