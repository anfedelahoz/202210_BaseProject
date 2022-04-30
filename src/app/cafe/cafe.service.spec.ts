/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should inject service', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
