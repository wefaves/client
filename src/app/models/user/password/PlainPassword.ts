export class PlainPassword {
  private _first: string;
  private _second: string;

  public static GetNewInstance(): PlainPassword {
    return new PlainPassword('', '');
  }

  public static GetModel(plainPassword: PlainPassword): {} {
    return {
      'first': plainPassword._first,
      'second': plainPassword._second
    };
  }

  constructor(first: string, second: string) {
    this._first = first;
    this._second = second;
  }

  get first(): string {
    return this._first;
  }

  set first(value: string) {
    this._first = value;
  }

  get second(): string {
    return this._second;
  }

  set second(value: string) {
    this._second = value;
  }
}