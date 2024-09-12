import { TestBed } from '@angular/core/testing';

import { ErrorinterceptService } from './errorintercept.service';

describe('ErrorinterceptService', () => {
  let service: ErrorinterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorinterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
