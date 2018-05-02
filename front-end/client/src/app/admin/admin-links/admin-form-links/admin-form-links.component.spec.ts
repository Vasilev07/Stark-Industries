import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormLinksComponent } from './admin-form-links.component';

describe('AdminFormLinksComponent', () => {
  let component: AdminFormLinksComponent;
  let fixture: ComponentFixture<AdminFormLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFormLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
