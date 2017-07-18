export class History {

  private _id: number;
  private _title: string;
  private _lastVisit: string;
  private _typedCount: number;
  private _url: string;
  private _visitCount: number;

  public static GetNewInstance(): History {
    return new History(null, null, null, null, null, null);
  }

  public static ParseFromObject(object): History {
    const history = History.GetNewInstance();

    if (object) {
      history.id = object.id;
      history.title = object.title;
      history.lastVisit = object.lastVisit;
      history.typedCount = object.typedCount;
      history.url = object.url;
      history.visitCount = object.visitCount;
    }

    return history;
  }

  public static ParseFromObjectToArray(object): Array<History> {
    const array = new Array<History>();

    if (object) {
      for (const entry of object) {
        array.push(History.ParseFromObject(entry));
      }
    }

    return array;
  }


  constructor(id: number, title: string, lastVisit: string, typedCount: number, url: string, visitCount: number) {
    this._id = id;
    this._title = title;
    this._lastVisit = lastVisit;
    this._typedCount = typedCount;
    this._url = url;
    this._visitCount = visitCount;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get lastVisit(): string {
    return this._lastVisit;
  }

  set lastVisit(value: string) {
    this._lastVisit = value;
  }

  get typedCount(): number {
    return this._typedCount;
  }

  set typedCount(value: number) {
    this._typedCount = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get visitCount(): number {
    return this._visitCount;
  }

  set visitCount(value: number) {
    this._visitCount = value;
  }
}
