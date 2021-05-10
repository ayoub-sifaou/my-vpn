import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {FormSignIn} from '../../../model/formSignIn';
import {FormSignup} from '../../../model/formSignup';
import {faTimes, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formSignIn: FormGroup = new FormGroup({});
  formSignUp: FormGroup = new FormGroup({});
  animation: boolean = false;
  faTimes = faTimes;
  hideSignUp = true;
  hideSignIn = true;
  faTimesCircle = faTimesCircle;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.formSignIn = this.fb.group({
      userName: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
    this.formSignUp = this.fb.group({
      userName: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
  }

  signUp() {
    const signUp = document.getElementById('sign-up');
    signUp?.classList.add('translate');
    this.animation = true;
  }

  signIn() {
    const signUp = document.getElementById('sign-up');
    signUp?.classList.remove('translate');
    this.animation = false;
  }
  getErrorMessageForEmail() {
    if (this.formSignUp.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formSignUp.controls.email.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmitSignIn(){
    if (this.formSignIn.valid) {
      const form: FormSignIn = new FormSignIn(this.formSignIn.value);
      console.log(form);
    }
  }
  onSubmitSignUp(){
    if (this.formSignUp.valid) {
      const form: FormSignup = new FormSignup(this.formSignUp.value);
      console.log(form);
    }
  }
  closeDialogLogin(){
    const navigation = document.getElementById('navigation');
    if (navigation?.classList.contains('hidden-nav')) {
      navigation.classList.remove('hidden-nav');
    } else {
      navigation?.classList.add('hidden-nav');
    }
    this.dialog.closeAll();
  }
}
