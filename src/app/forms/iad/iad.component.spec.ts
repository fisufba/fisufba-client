import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IadComponent } from './iad.component';

describe('IadComponent', () => {
  let component: IadComponent;
  let fixture: ComponentFixture<IadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
