import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BostonProtocolComponent } from './boston-protocol.component';

describe('BostonProtocolComponent', () => {
  let component: BostonProtocolComponent;
  let fixture: ComponentFixture<BostonProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BostonProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BostonProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
