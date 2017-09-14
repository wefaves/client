import { PlainPassword } from './PlainPassword';

export class Password {
  private _current_password: string;
  private _plainPassword: PlainPassword;

  public static GetNewInstance(): Password {
    return new Password('', PlainPassword.GetNewInstance());
  }

  public static GetModel(password: Password): {} {
    return {
      'current_password': password._current_password,
      'plainPassword': PlainPassword.GetModel(password._plainPassword)
    };
  }

  constructor(current_password: string, plainPassword: PlainPassword) {
    this._current_password = current_password;
    this._plainPassword = plainPassword;
  }

  set current_password(value: string) {
    this._current_password = value;
  }

  set plainPassword(value: PlainPassword) {
    this._plainPassword = value;
  }

  get current_password(): string {
    return this._current_password;
  }

  get plainPassword(): PlainPassword {
    return this._plainPassword;
  }
}