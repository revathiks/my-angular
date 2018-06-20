import { TestBed, inject } from '@angular/core/testing';

import { UsertableService } from './usertable.service';

describe('UsertableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsertableService]
    });
  });

  it('should be created', inject([UsertableService], (service: UsertableService) => {
    expect(service).toBeTruthy();
  }));
});
