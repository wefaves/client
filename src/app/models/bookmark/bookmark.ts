import {User} from "../user/user";

export class Bookmark {
  private _id: number;
  private _indexId: number;
  private _title: string;
  private _url: string;
  private _user: User;

  public static GetNewInstance(): Bookmark {
    return new Bookmark(null, null, null, null, null);
  }

  public static ParseFromObject(object): Bookmark {
    const bookmark = Bookmark.GetNewInstance();

    if (object) {
      bookmark.id = object.id;
      bookmark.indexId = object.indexId;
      bookmark.title = object.title;
      bookmark.url = object.url;
      bookmark.user = User.ParseFromObject(object.user);
    }

    return bookmark;
  }

  public static ParseFromObjectToArray(object): Array<Bookmark> {
    const bookmarks = new Array<Bookmark>();

    for (const bookmark of object) {
      bookmarks.push(Bookmark.ParseFromObject(bookmark));
    }

    return bookmarks;
  }

  constructor(id: number, indexId: number, title: string, url: string, user: User) {
    this._id = id;
    this._indexId = indexId;
    this._title = title;
    this._url = url;
    this._user = user;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get indexId(): number {
    return this._indexId;
  }

  set indexId(value: number) {
    this._indexId = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
