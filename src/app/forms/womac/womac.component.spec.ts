import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomacComponent } from './womac.component';

describe('WomacComponent', () => {
  let component: WomacComponent;
  let fixture: ComponentFixture<WomacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
