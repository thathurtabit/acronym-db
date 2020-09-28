import { dummyGetAcronymsListResponse } from './acronyms.service.mock';
import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';

import { AcronymsService } from './acronyms.service';

describe('AcronymsService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: AcronymsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [AcronymsService],
    });

    injector = getTestBed();
    service = TestBed.inject(AcronymsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAcronyms() should return acronyms', () => {
    service.getAcronyms().subscribe((res) => {
      expect(res).toEqual(dummyGetAcronymsListResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/acronyms');
    expect(req.request.method).toBe('GET');
    req.flush(dummyGetAcronymsListResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
