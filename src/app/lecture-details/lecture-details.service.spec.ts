import { TestBed, inject } from '@angular/core/testing';

import { LectureDetailsService } from './lecture-details.service';

describe('LectureDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LectureDetailsService]
    });
  });

  it('should be created', inject([LectureDetailsService], (service: LectureDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
