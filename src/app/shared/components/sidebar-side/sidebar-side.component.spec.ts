import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSideComponent } from './sidebar-side.component';

describe('SidebarSideComponent', () => {
  let component: SidebarSideComponent;
  let fixture: ComponentFixture<SidebarSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
