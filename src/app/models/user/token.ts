export class Token {
  private _access_token: string;
  private _expires_in: number;
  private _refresh_token: string;
  private _scope: any;
  private _token_type: string;

  public static GetNewInstance(): Token {
    return new Token('', 0, '', null, '');
  }

  public static ParseFromObject(object: any): Token {
    const token = Token.GetNewInstance();

    if (object) {
      if (object.access_token) {
        token._access_token = object.access_token;
      }
      if (object.expires_in) {
        token._expires_in = object.expires_in;
      }
      if (object.refresh_token) {
        token._refresh_token = object.refresh_token;
      }
      if (object.scope) {
        token._scope = object.scope;
      }
      if (object.token_type) {
        token._token_type = object.token_type;
      }
    }
    return token;
  }

  public static GetModel(token: Token): {} {
    return {
      'access_token':  token.access_token,
      'expires_in':  token.expires_in,
      'refresh_token':  token.refresh_token,
      'scope':  token.scope,
      'token_type':  token.token_type,
    };
  }

  constructor(access_token: string, expires_in: number, refresh_token: string, scope: any, token_type: string) {
    this._access_token = access_token;
    this._expires_in = expires_in;
    this._refresh_token = refresh_token;
    this._scope = scope;
    this._token_type = token_type;
  }

  get access_token(): string {
    return this._access_token;
  }

  set access_token(value: string) {
    this._access_token = value;
  }

  get expires_in(): number {
    return this._expires_in;
  }

  set expires_in(value: number) {
    this._expires_in = value;
  }

  get refresh_token(): string {
    return this._refresh_token;
  }

  set refresh_token(value: string) {
    this._refresh_token = value;
  }

  get scope(): any {
    return this._scope;
  }

  set scope(value: any) {
    this._scope = value;
  }

  get token_type(): string {
    return this._token_type;
  }

  set token_type(value: string) {
    this._token_type = value;
  }
}
