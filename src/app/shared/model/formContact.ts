export class FormContact {
  name: string;
  email: string;
  message: string;

  constructor(formContact: any) {
    this.name = formContact.name;
    this.email = formContact.email;
    this.message = formContact.message;
  }
}
