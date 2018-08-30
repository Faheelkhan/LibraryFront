import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPressComponent } from './all-press.component';

describe('AllPressComponent', () => {
  let component: AllPressComponent;
  let fixture: ComponentFixture<AllPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
