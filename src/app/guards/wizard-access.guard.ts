import { CanActivateFn } from '@angular/router';

export const wizardAccessGuard: CanActivateFn = (route, state) => {
  const id =  route.paramMap.get('id');
  if (id === 'f86280b1-faa6-44fd-b8a9-f7a4556f8d20'){
    alert('Access to this wizard is restricted!');
    return false;
  }

  return true;
}
