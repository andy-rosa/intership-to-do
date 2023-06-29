import {AbstractControl, ValidationErrors} from "@angular/forms";
import {delay, Observable, of} from "rxjs";

export function EmailValidatorAsync(control: AbstractControl):
  Observable<ValidationErrors | null> {
  if (control.value.includes('durak')) {
    return of({'nameError': 'Плохое слово'}).pipe(
      delay(1000)
    );
  }
  return of(null);
}
