import { AbstractControl } from '@angular/forms';

export function caracterEspecialValidator(control: AbstractControl) {
  const password = control.value as string;

  let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]/;

  // se tiver caracter especial ele retorna null se não ele retorna caracterEspecial: true e lança o erro na tela
  if(regex.test(password)) {
    return null
  }
  return {caracterEspecial: true}

}
