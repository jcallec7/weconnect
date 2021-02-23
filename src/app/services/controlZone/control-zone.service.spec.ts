import { TestBed } from '@angular/core/testing';

import { ControlZoneService } from './control-zone.service';

describe('ControlZoneService', () => {
  let service: ControlZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
