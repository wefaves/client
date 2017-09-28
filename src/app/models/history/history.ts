export class History {

  private _id: number;
  private _item_id: number;
  private _title: string;
  private _url: string;
  private _last_visit_time: string;
  private _typed_count: number;
  private _visit_count: number;
  private _updated_at: string;
  private _created_at: string;


  public static GetNewInstance(): History {
    return new History(null, null, null, null, null, null, null, null, null);
  }

  public static ParseFromObject(object): History {
    const history = History.GetNewInstance();

    if (object) {
      history.id = object.id;
      history.title = object.title;
      history.last_visit_time = object.last_visit_time;
      history.item_id = object.item_id;
      history.url = object.url;
      history.visit_count = object.visit_count;
      history.typed_count = object.typed_count;
      history.updated_at = object.updated_at;
      history.created_at = object.created_at;
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

  constructor(id: number, item_id: number, title: string, url: string,
              last_visit_time: string, typed_count: number, visit_count: number,
              updated_at: string, created_at: string) {
    this._id = id;
    this._item_id = item_id;
    this._title = title;
    this._url = url;
    this._last_visit_time = last_visit_time;
    this._typed_count = typed_count;
    this._visit_count = visit_count;
    this._updated_at = updated_at;
    this._created_at = created_at;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get item_id(): number {
    return this._item_id;
  }

  set item_id(value: number) {
    this._item_id = value;
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

  get last_visit_time(): string {
    return this._last_visit_time;
  }

  set last_visit_time(value: string) {
    this._last_visit_time = value;
  }

  get typed_count(): number {
    return this._typed_count;
  }

  set typed_count(value: number) {
    this._typed_count = value;
  }

  get visit_count(): number {
    return this._visit_count;
  }

  set visit_count(value: number) {
    this._visit_count = value;
  }

  get updated_at(): string {
    return this._updated_at;
  }

  set updated_at(value: string) {
    this._updated_at = value;
  }

  get created_at(): string {
    return this._created_at;
  }

  set created_at(value: string) {
    this._created_at = value;
  }
}
