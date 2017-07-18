import {LogTime} from "./logTime";
import {JwtHelper} from "angular2-jwt";

export class User {

  private _username: string;
  private _id: number;
  private _email: string;
  private _lastLogin: LogTime;
  private _roles: string[];
  private _token: string;

  public static GetNewInstance(): User {
    return new User(null, null, null, null, null, null);
  }

  public static ParseFromJwt(jwt: any): User {
    const jwtHelper: JwtHelper = new JwtHelper();
    let object = jwtHelper.decodeToken(jwt.token.toString());
    const user = User.ParseFromObject(object);

    user.token = jwt.token.toString();
    return user;
  }

  public static ParseFromObject(object): User {
    const user = User.GetNewInstance();

    if (object) {
      user.username = object.username;
      user.id = object.id;
      user.email = object.email;
      user.lastLogin = LogTime.ParseFromObject(object.lastLogin);
      user.roles = object.roles;
      user.token = object.token;
    }

    return user;
  }

  public static ParseFromObjectToArray(object): Array<User> {
    const users = new Array<User>();

    for (const user in object) {
      users.push(User.ParseFromObject(user));
    }

    return users;
  }

  public static GetModel(user: User): object {
    return {
      username: user.username,
      id: user.id,
      email: user.email,
      lastlogin: LogTime.GetModel(user.lastLogin),
      roles: user.roles,
      token: user.token
    };
  }

  constructor(username: string, id: number, email: string, lastLogin: LogTime, roles: string[], token: string) {
    this._username = username;
    this._id = id;
    this._email = email;
    this._lastLogin = lastLogin;
    this._roles = roles;
    this._token = token;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get lastLogin(): LogTime {
    return this._lastLogin;
  }

  set lastLogin(value: LogTime) {
    this._lastLogin = value;
  }

  get roles(): string[] {
    return this._roles;
  }

  set roles(value: string[]) {
    this._roles = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
