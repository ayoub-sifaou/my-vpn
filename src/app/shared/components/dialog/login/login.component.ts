import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {FormSignIn} from '../../../model/formSignIn';
import {FormSignup} from '../../../model/formSignup';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formSignIn: FormGroup = new FormGroup({});
  formSignUp: FormGroup = new FormGroup({});
  animation: boolean = false;
  faEyeSlash = faEyeSlash;
  hide = true;

  constructor(private fb: FormBuilder) {}

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
    this.animation = true;
  }

  signIn() {
    this.animation = false;
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
}
