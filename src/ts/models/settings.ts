import { TimeInterval } from "../enums/time-interval";

export class Settings {
  public currency: string;
  public darkModeEnabled: boolean;
  public timeInterval: TimeInterval;

  constructor() {
    this.currency = "USD";
    this.darkModeEnabled = false;
    this.timeInterval = TimeInterval.ONE_DAY;
  }
}
