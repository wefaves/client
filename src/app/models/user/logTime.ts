export class LogTime {
  private _date: Date;
  private _timezone_type: number;
  private _timezone: string;

  public static GetNewInstance(): LogTime {
    return new LogTime(null, null, null);
  }

  public static ParseFromObject(object): LogTime {
    const logTime = LogTime.GetNewInstance();

    if (object) {
      logTime.date = object.date;
      logTime.timezone_type = object.timezone_type;
      logTime.timezone = object.timezone;
    }

    return logTime;
  }

  public static GetModel(logTime: LogTime): object {
    return {
      date: logTime.date,
      timezone_time: logTime.timezone_type,
      timezone: logTime.timezone
    }
  }

  constructor(date: Date, timezone_type: number, timezone: string) {
    this._date = date;
    this._timezone_type = timezone_type;
    this._timezone = timezone;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get timezone_type(): number {
    return this._timezone_type;
  }

  set timezone_type(value: number) {
    this._timezone_type = value;
  }

  get timezone(): string {
    return this._timezone;
  }

  set timezone(value: string) {
    this._timezone = value;
  }
}
