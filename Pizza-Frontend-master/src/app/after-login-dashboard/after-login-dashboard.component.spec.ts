import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginDashboardComponent } from './after-login-dashboard.component';

describe('AfterLoginDashboardComponent', () => {
  let component: AfterLoginDashboardComponent;
  let fixture: ComponentFixture<AfterLoginDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterLoginDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterLoginDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
