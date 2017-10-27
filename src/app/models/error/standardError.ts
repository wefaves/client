export class StandardError {
  private _status: number;
  private _cause: string;

  constructor(status: number, cause: string) {
    this._status = status;
    this._cause = cause;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get cause(): string {
    return this._cause;
  }

  set cause(value: string) {
    this._cause = value;
  }
}