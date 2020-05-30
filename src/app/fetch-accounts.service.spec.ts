import { TestBed } from '@angular/core/testing';

import { FetchAccountsService } from './fetch-accounts.service';

describe('FetchAccountsService', () => {
  let service: FetchAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
