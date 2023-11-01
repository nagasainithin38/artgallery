import { TestBed } from '@angular/core/testing';

import { FavouriteIdsService } from './favourite-ids.service';

describe('FavouriteIdsService', () => {
  let service: FavouriteIdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteIdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
