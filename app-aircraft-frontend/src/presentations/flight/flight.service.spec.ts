import { TestBed } from '@angular/core/testing';

import { FlightService } from './flight.service';

describe('UserService', () => {
  let service: FlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(FlightService);
  });

  it('should return today\'s flights ', () => {
    expect(service);
  });
});