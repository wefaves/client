export class User {

  private _id: number;
  private _email: string;
  private _is_admin: boolean;
  private _name: string;
  private _picture: string;

  public static GetNewInstance(): User {
    return new User(0, '', false, '', '');
  }

  public static ParseFromObject(object): User {
    const user = User.GetNewInstance();

    if (object) {
      if (object.id) {
        user.id = object.id;
      }
      if (object.email) {
        user.email = object.email;
      }
      if (object.is_admin) {
        user.is_admin = object.is_admin;
      }
      if (object.name) {
        user.name = object.name;
      }
      if (object.picture) {
        user.picture = object.picture;
      }
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
      id: user.id,
      email: user.email,
      is_admin: user.is_admin,
      name: user.name,
      picture: user.picture
    };
  }

  constructor(id: number, email: string, is_admin: boolean, name: string, picture: string) {
    this._id = id;
    this._email = email;
    this._is_admin = is_admin;
    this._name = name;
    this._picture = picture;
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

  get is_admin(): boolean {
    return this._is_admin;
  }

  set is_admin(value: boolean) {
    this._is_admin = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }
}

