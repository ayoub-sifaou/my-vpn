import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContact: FormGroup = new FormGroup({});
  faMapMarkedAlt = faMapMarkedAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formContact = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      message: this.fb.control('', [Validators.required])
    });
  }

  getErrorMessageForEmail() {
    if (this.formContact.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formContact.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

}
