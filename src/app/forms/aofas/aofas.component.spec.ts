import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AofasComponent } from './aofas.component';

describe('AofasComponent', () => {
  let component: AofasComponent;
  let fixture: ComponentFixture<AofasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AofasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AofasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
