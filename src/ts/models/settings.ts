import { TimeInterval } from "../enums/time-interval";

export class Settings {
  public currency: string;
  public timeInterval: TimeInterval;

  constructor() {
    this.currency = "USD";
    this.timeInterval = TimeInterval.ONE_DAY;
  }
}
