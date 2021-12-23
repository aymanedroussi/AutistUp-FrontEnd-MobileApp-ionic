import { TestBed } from '@angular/core/testing';

import { VideoFormationService } from './video-formation.service';

describe('VideoFormationService', () => {
  let service: VideoFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
