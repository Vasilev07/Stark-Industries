import { Injectable} from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Injectable()
export class PatternValidatorService {

  constructor() {}

  passwordConfirming(c: AbstractControl): {
    invalid: boolean
  } {
    if (c.get('password').value !== c.get('confirm_password').value) {
      return {
        invalid: true
      };
    }
  }
}
