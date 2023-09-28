import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // todo make it pending
  // it('should add two numbers', () => {
  //   fail()
  // });

  it('should be correct', () => {
    const result = service.divide(1,1)
    expect(result).toBe(1);
  });

  // todo fix it
  // it('should be infinity ', () => {
  //   const result = service.divide(1,2)
  //   expect(result)
  //     .withContext('Second number isn`t 0')
  //     .toBe(Infinity);
  // });

});
