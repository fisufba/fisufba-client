import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinetiComponent } from './tineti.component';

describe('TinetiComponent', () => {
  let component: TinetiComponent;
  let fixture: ComponentFixture<TinetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
