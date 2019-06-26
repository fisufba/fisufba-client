import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoniometryComponent } from './goniometry.component';

describe('GoniometryComponent', () => {
  let component: GoniometryComponent;
  let fixture: ComponentFixture<GoniometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoniometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoniometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
