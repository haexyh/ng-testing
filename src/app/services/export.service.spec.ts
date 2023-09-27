import {TestBed} from '@angular/core/testing';

import {ExportService} from './export.service';
import {AsyncService} from "./async.service";
import createSpyObj = jasmine.createSpyObj;
import {HttpClientTestingModule} from "@angular/common/http/testing";
import Jasmine = jasmine.Jasmine;
import Spy = jasmine.Spy;

fdescribe('ExportService', () => {
  let service: ExportService, asyncService: any;

  beforeEach(() => {
    const mock  = createSpyObj('AsyncService', ['isConnected']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: AsyncService, use: mock}]
    });
    service = TestBed.inject(ExportService);
    asyncService = TestBed.inject(AsyncService)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(asyncService).toBeTruthy();

  });

  it('can`t export', () => {
    spyOn(asyncService,'isConnected'); // mock it
    const result = service.canExport();
    expect(result).toBeFalsy();
  });

  it('can  export', () => {
    spyOn(asyncService,'isConnected').and.returnValue(true)
    const result = service.canExport();
    expect(result).toBe(true);
  });

});
