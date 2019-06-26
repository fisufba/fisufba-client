import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociodemographicComponent } from './sociodemographic.component';

describe('SociodemographicComponent', () => {
  let component: SociodemographicComponent;
  let fixture: ComponentFixture<SociodemographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociodemographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociodemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
