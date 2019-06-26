import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OswestryComponent } from './oswestry.component';

describe('OswestryComponent', () => {
  let component: OswestryComponent;
  let fixture: ComponentFixture<OswestryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OswestryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OswestryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
