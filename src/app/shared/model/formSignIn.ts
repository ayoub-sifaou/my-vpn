
export class FormSignIn {
  user_name: string;
  password: string;

  constructor(formSignIn: any) {
    this.user_name = formSignIn.userName;
    this.password = formSignIn.paswword;
  }
}
