import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressInfoComponent } from './press-info.component';

describe('PressInfoComponent', () => {
  let component: PressInfoComponent;
  let fixture: ComponentFixture<PressInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
