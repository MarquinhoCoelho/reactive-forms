import { AbstractControl } from '@angular/forms';
export function senhaMinCaracterValidator(control: AbstractControl) {

  const password = control.value as string;
  const quantidadeDeCaracteresMinima = 8;

  if (password.length >= quantidadeDeCaracteresMinima) {
    return null
  }
  return { minimo8: true }

}
