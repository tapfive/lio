export class AppData {
  private static instance: AppData = new AppData();

  public timeInterval = '1d';

  public static getInstance(): AppData {
    return AppData.instance;
  }

  constructor() {
    if (AppData.instance) {
      throw new Error('Error: Instantiation failed: Use AppData.getInstance() instead of new.');
    }
    AppData.instance = this;
  }

}
