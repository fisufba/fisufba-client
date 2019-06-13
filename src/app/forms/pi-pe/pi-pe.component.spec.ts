import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiPeComponent } from './pi-pe.component';

describe('PiPeComponent', () => {
  let component: PiPeComponent;
  let fixture: ComponentFixture<PiPeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiPeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
