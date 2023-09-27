import { TestBed } from '@angular/core/testing';

import { AsyncService } from './async.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
