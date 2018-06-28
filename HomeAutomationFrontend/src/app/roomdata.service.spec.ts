import { TestBed, inject } from '@angular/core/testing';

import { RoomdataService } from './roomdata.service';

describe('RoomdataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomdataService]
    });
  });

  it('should be created', inject([RoomdataService], (service: RoomdataService) => {
    expect(service).toBeTruthy();
  }));
});
