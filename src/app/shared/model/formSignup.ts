export class FormSignup {
  user_name: string;
  email: string;
  password: string;

  constructor(formSignUp: any) {
    this.user_name = formSignUp.userName;
    this.email = formSignUp.email;
    this.password = formSignUp.paswword;
  }
}
