import { TestBed } from '@angular/core/testing';

import { BookingsManageService } from './bookings-manage.service';

describe('BookingsManageService', () => {
  let service: BookingsManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingsManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
