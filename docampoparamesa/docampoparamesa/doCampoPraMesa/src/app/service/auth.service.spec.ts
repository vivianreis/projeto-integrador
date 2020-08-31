import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { NOMEM } from 'dns';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});