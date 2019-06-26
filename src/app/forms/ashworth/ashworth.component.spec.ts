import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshworthComponent } from './ashworth.component';

describe('AshworthComponent', () => {
  let component: AshworthComponent;
  let fixture: ComponentFixture<AshworthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshworthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
