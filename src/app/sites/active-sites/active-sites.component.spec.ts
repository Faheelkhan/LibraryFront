import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSitesComponent } from './active-sites.component';

describe('ActiveSitesComponent', () => {
  let component: ActiveSitesComponent;
  let fixture: ComponentFixture<ActiveSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
