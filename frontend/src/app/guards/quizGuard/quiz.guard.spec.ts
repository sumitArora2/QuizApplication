import { TestBed, async, inject } from '@angular/core/testing';

import { QuizGuard } from './quiz.guard';

describe('QuizGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizGuard]
    });
  });

  it('should ...', inject([QuizGuard], (guard: QuizGuard) => {
    expect(guard).toBeTruthy();
  }));
});
