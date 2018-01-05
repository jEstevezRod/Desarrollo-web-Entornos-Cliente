import { TestBed, inject } from '@angular/core/testing';

import { GlobalPetitionService } from './global-petition.service';

describe('GlobalPetitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalPetitionService]
    });
  });

  it('should be created', inject([GlobalPetitionService], (service: GlobalPetitionService) => {
    expect(service).toBeTruthy();
  }));
});
