import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { wizardAccessGuard } from './wizard-access.guard';

describe('wizardAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => wizardAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
