import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMenuMainMenuComponent } from './web-menu-main-menu.component';

describe('WebMenuMainMenuComponent', () => {
  let component: WebMenuMainMenuComponent;
  let fixture: ComponentFixture<WebMenuMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebMenuMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMenuMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
