export class Token {
  private _access_token: string;
  private _refresh_token: string;
  private _expires_in: string;
  private _token_type: string;
  private _signedRequest: string;
  private _userID: string;
  private _fromFB: boolean;

  public static GetNewInstance(): Token {
    return new Token('', '', '', '', false);
  }

  public static ParseFromObject(object, fromFacebook: boolean = false): Token {
    const token = Token.GetNewInstance();

    if (object) {
      token.fromFB = fromFacebook;
      if (fromFacebook) {
        if (object.accessToken) {
          token.access_token = object.accessToken;
        }
        if (object.expiresIn) {
          token.expires_in = object.expiresIn;
        }
        if (object.signedRequest) {
          token.signedRequest = object.signedRequest;
        }
        if (object.userID) {
          token.userID = object.userID;
        }
      } else {
        if (object.access_token) {
          token.access_token = object.access_token;
        }
        if (object.refresh_token) {
          token.refresh_token = object.refresh_token;
        }
        if (object.expires_in) {
          token.expires_in = object.expires_in;
        }
        if (object.token_type) {
          token.token_type = object.token_type;
        }
      }

    }

    return token;
  }

  public getModel(): {} {
    return {
      'access_token': this.access_token,
      'refresh_token': this.refresh_token,
      'expires_in': this.expires_in,
      'token_type': this.token_type,
      'signedRequest': this.signedRequest,
      'userID': this.userID,
      'fromFB': this.fromFB
    }
  }

  constructor(access_token: string, refresh_token: string, expires_in: string, token_type: string, fromFB: boolean) {
    this._access_token = access_token;
    this._refresh_token = refresh_token;
    this._expires_in = expires_in;
    this._token_type = token_type;
    this._fromFB = fromFB;
  }

  get access_token(): string {
    return this._access_token;
  }

  set access_token(value: string) {
    this._access_token = value;
  }

  get refresh_token(): string {
    return this._refresh_token;
  }

  set refresh_token(value: string) {
    this._refresh_token = value;
  }

  get expires_in(): string {
    return this._expires_in;
  }

  set expires_in(value: string) {
    this._expires_in = value;
  }

  get token_type(): string {
    return this._token_type;
  }

  set token_type(value: string) {
    this._token_type = value;
  }

  get signedRequest(): string {
    return this._signedRequest;
  }

  set signedRequest(value: string) {
    this._signedRequest = value;
  }

  get userID(): string {
    return this._userID;
  }

  set userID(value: string) {
    this._userID = value;
  }

  get fromFB(): boolean {
    return this._fromFB;
  }

  set fromFB(value: boolean) {
    this._fromFB = value;
  }
}
