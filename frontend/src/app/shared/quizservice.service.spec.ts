import { TestBed } from '@angular/core/testing';

import { QuizserviceService } from './quizservice.service';

describe('QuizserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizserviceService = TestBed.get(QuizserviceService);
    expect(service).toBeTruthy();
  });
});
