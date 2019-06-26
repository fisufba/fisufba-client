import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabqComponent } from './fabq.component';

describe('FabqComponent', () => {
  let component: FabqComponent;
  let fixture: ComponentFixture<FabqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
