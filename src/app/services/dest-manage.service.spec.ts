import { TestBed } from '@angular/core/testing';

import { DestManageService } from './dest-manage.service';

describe('DestManageService', () => {
  let service: DestManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
