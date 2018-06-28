import { TestBed, inject, async } from '@angular/core/testing';
import { HomedataService } from './homedata.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('HomedataService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [HomedataService]
    });
  }));

  it('should be created', inject([HomedataService], (service: HomedataService) => {
    expect(service).toBeTruthy();
  }));
});
