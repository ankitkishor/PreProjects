import { TestBed } from '@angular/core/testing';

import { AfterLoginDashboardService } from './after-login-dashboard.service';

describe('AfterLoginDashboardService', () => {
  let service: AfterLoginDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfterLoginDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
