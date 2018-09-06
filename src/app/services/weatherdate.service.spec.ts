import { TestBed, inject } from '@angular/core/testing';

import { WeatherdateService } from './weatherdate.service';

describe('WeatherdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherdateService]
    });
  });

  it('should be created', inject([WeatherdateService], (service: WeatherdateService) => {
    expect(service).toBeTruthy();
  }));
});
