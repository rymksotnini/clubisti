import { TestBed } from '@angular/core/testing';

import { MoneyTransferService } from './money-transfer.service';

describe('MoneyTransferService', () => {
  let service: MoneyTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
