import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePressComponent } from './create-press.component';

describe('CreatePressComponent', () => {
  let component: CreatePressComponent;
  let fixture: ComponentFixture<CreatePressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
