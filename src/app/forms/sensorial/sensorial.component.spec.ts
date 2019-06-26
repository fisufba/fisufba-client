import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorialComponent } from './sensorial.component';

describe('SensorialComponent', () => {
  let component: SensorialComponent;
  let fixture: ComponentFixture<SensorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
