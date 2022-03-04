import { TestBed } from '@angular/core/testing';

import { AltitudeService } from './altitude.service';

describe('AltitudeService', () => {
  let service: AltitudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltitudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
