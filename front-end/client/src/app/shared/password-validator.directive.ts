import { Directive } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[starkPasswordValidator]'
})
export class PasswordValidatorDirective {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
     if(password != confirmPassword) {
         console.log('false');
         AC.get('confirmPassword').setErrors( {MatchPassword: true} )
     } else {
         console.log('true');
         return null
     }
 }
}
