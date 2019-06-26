import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceScaleComponent } from './balance-scale.component';

describe('BalanceScaleComponent', () => {
  let component: BalanceScaleComponent;
  let fixture: ComponentFixture<BalanceScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
